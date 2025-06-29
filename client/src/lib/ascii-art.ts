export const ASCII_ART = {
  WELCOME_BANNER: `
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
                                                                        
           Welcome to Christopher Joshy's Developer Portfolio
                    Type 'help' to get started
                                                                        
████████████████████████████████████████████████████████████████████████`,

  FASTFETCH: `                .--.         christopher@portfolio
             .-"    "-.      -------------------------
            /          \\     OS: Portfolio Linux v1.0
           |            |    Shell: React + xterm.js  
           |     📱     |    Host: Render.com
            \\          /     RAM: ∞ Creativity
             '-.____..-'     CPU: Problem Solver
                            Uptime: Always Learning
                            Skills: Web, AI, Game Dev
                            Status: Available for Hire`,

  HIRE_BANNER: `
🎉 HIRING PROTOCOL INITIATED 🎉

         ██╗  ██╗██╗██████╗ ███████╗██████╗ 
         ██║  ██║██║██╔══██╗██╔════╝██╔══██╗
         ███████║██║██████╔╝█████╗  ██║  ██║
         ██╔══██║██║██╔══██╗██╔══╝  ██║  ██║
         ██║  ██║██║██║  ██║███████╗██████╔╝
         ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝╚═════╝ 

🚀 MISSION ACCOMPLISHED - DEVELOPER ACQUIRED 🚀`,

  RECRUAI_BANNER: `    ██████╗ ███████╗ ██████╗██████╗ ██╗   ██╗ █████╗ ██╗
    ██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██╔══██╗██║
    ██████╔╝█████╗  ██║     ██████╔╝██║   ██║███████║██║
    ██╔══██╗██╔══╝  ██║     ██╔══██╗██║   ██║██╔══██║██║
    ██║  ██║███████╗╚██████╗██║  ██║╚██████╔╝██║  ██║██║
    ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝`,

  PROJECT_BORDER: {
    TOP: '┌─────────────────────────────────────────────────────────────────────┐',
    MIDDLE: '│',
    BOTTOM: '└─────────────────────────────────────────────────────────────────────┘'
  }
};

export function createLoadingBar(progress: number, width: number = 50): string {
  const filled = Math.floor((progress / 100) * width);
  const empty = width - filled;
  return '█'.repeat(filled) + '░'.repeat(empty);
}

export function createProgressAnimation(
  message: string, 
  width: number = 50
): (progress: number) => string {
  return (progress: number) => {
    const bar = createLoadingBar(progress, width);
    return `${message}\n[${bar}] ${progress}%`;
  };
}

export function centerText(text: string, width: number): string {
  const padding = Math.max(0, Math.floor((width - text.length) / 2));
  return ' '.repeat(padding) + text;
}

export function createProjectBanner(title: string, subtitle: string): string {
  const width = 69; // Inside border width
  const centeredTitle = centerText(title, width);
  const centeredSubtitle = centerText(subtitle, width);
  
  return `${ASCII_ART.PROJECT_BORDER.TOP}
${ASCII_ART.PROJECT_BORDER.MIDDLE}${centeredTitle}${ASCII_ART.PROJECT_BORDER.MIDDLE}
${ASCII_ART.PROJECT_BORDER.MIDDLE}${centeredSubtitle}${ASCII_ART.PROJECT_BORDER.MIDDLE}
${ASCII_ART.PROJECT_BORDER.BOTTOM}`;
}
