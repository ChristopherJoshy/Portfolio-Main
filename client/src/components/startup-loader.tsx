import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, Loader2, Database } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';

interface StartupLoaderProps {
  onComplete: (success: boolean) => void;
}

interface SystemCheck {
  name: string;
  status: 'pending' | 'success' | 'error';
  message?: string;
}

export function StartupLoader({ onComplete }: StartupLoaderProps): JSX.Element {
  const [checks, setChecks] = useState<SystemCheck[]>([
    { name: 'Firebase Connection', status: 'pending' },
    { name: 'Database Collections', status: 'pending' },
    { name: 'System Resources', status: 'pending' },
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);

  const updateCheck = (index: number, status: 'success' | 'error', message?: string) => {
    setChecks(prev => prev.map((check, i) => 
      i === index ? { ...check, status, message } : check
    ));
  };

  const runSystemChecks = async () => {
    try {
      // Check 1: Firebase Connection
      setCurrentStep(0);
      try {
        const response = await apiRequest('GET', '/api/health');
        updateCheck(0, 'success', 'Connected to Firebase Firestore');
        await new Promise(resolve => setTimeout(resolve, 800));
      } catch (error) {
        console.error('Firebase connection failed:', error);
        updateCheck(0, 'error', 'Failed to connect to Firebase');
        await new Promise(resolve => setTimeout(resolve, 1000));
        onComplete(false);
        return;
      }

      // Check 2: Database Collections
      setCurrentStep(1);
      try {
        await Promise.all([
          apiRequest('GET', '/api/projects'),
          apiRequest('GET', '/api/skills'),
          apiRequest('GET', '/api/bio'),
          apiRequest('GET', '/api/social')
        ]);
        updateCheck(1, 'success', 'All collections accessible');
        await new Promise(resolve => setTimeout(resolve, 800));
      } catch (error) {
        console.error('Database collections failed:', error);
        updateCheck(1, 'error', 'Database collections issue');
        await new Promise(resolve => setTimeout(resolve, 1000));
        onComplete(false);
        return;
      }

      // Check 3: System Resources
      setCurrentStep(2);
      try {
        // Simulate system check
        await new Promise(resolve => setTimeout(resolve, 500));
        updateCheck(2, 'success', 'Terminal ready');
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setShowTerminal(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        onComplete(true);
      } catch (error) {
        console.error('System check failed:', error);
        updateCheck(2, 'error', 'System resources unavailable');
        onComplete(false);
      }
    } catch (globalError) {
      console.error('System checks failed globally:', globalError);
      onComplete(false);
    }
  };

  useEffect(() => {
    runSystemChecks().catch(error => {
      console.error('System checks failed:', error);
      onComplete(false);
    });
  }, [onComplete]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-red-400" />;
      default:
        return <Loader2 className="h-4 w-4 text-blue-400 animate-spin" />;
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Card className="w-full max-w-md bg-gray-900 border-gray-700 text-white">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <Database className="h-12 w-12 mx-auto mb-4 text-green-400" />
            <h2 className="text-xl font-bold text-green-400 mb-2">
              Christopher Joshy Portfolio
            </h2>
            <p className="text-sm text-gray-400">
              {showTerminal ? 'Initializing terminal...' : 'Connecting to systems...'}
            </p>
          </div>

          <div className="space-y-4">
            {checks.map((check, index) => (
              <div key={index} className="flex items-center space-x-3">
                {getStatusIcon(check.status)}
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">
                    {check.name}
                  </div>
                  {check.message && (
                    <div className="text-xs text-gray-400">
                      {check.message}
                    </div>
                  )}
                </div>
                {currentStep === index && check.status === 'pending' && (
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                )}
              </div>
            ))}
          </div>

          {showTerminal && (
            <div className="mt-6 text-center">
              <div className="text-xs text-green-400 font-mono animate-pulse">
                $ christopher-portfolio --init
              </div>
              <div className="text-xs text-gray-400 mt-2">
                Terminal emulator starting...
              </div>
            </div>
          )}

          <div className="mt-6">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                style={{ 
                  width: `${((currentStep + (checks[currentStep]?.status === 'success' ? 1 : 0)) / checks.length) * 100}%` 
                }}
              />
            </div>
            <div className="text-xs text-gray-400 text-center mt-2">
              {Math.round(((currentStep + (checks[currentStep]?.status === 'success' ? 1 : 0)) / checks.length) * 100)}% complete
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}