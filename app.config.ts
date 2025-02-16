export default defineAppConfig({
  ui: {
    button: {
      variant: {
        ghost: 'text-fuchsia-900 dark:text-fuchsia-100',
        outline: 'text-fuchsia-100 dark:text-fuchsia-900 hover:bg-primary dark:hover:bg-primary',
        solid: 'bg-fuchsia-900 dark:bg-fuchsia-100 text-fuchsia-100 dark:text-fuchsia-900 hover:bg-primary dark:hover:bg-primary',
      },
    },
    container: {
      constrained: 'max-w-5xl',
    },
    gray: 'cool',
    notifications: {
      position: 'bottom-[unset] top-0',
    },
    primary: 'fuchsia',
  },
});
