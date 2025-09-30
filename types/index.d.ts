// types/animated-backgrounds.d.ts

  declare module 'animated-backgrounds' {
    import { ComponentType } from 'react';
    export const AnimatedBackground: ComponentType<any>;
    export const LayeredBackground: ComponentType<any>;
    export const useAnimationControls: () => any;
    export const usePerformanceMonitor: () => any;
  
  }
 