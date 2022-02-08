module.exports = (context, options) => ({
  name: 'plugin-dynamic-routes',
  contentLoaded: async ({ content, actions }) => {
      const { routes } = options
      const { addRoute } = actions
      routes.map(route => addRoute(route))
  }
})