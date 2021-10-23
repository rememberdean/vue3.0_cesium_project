module.exports = {
	lintOnSave: false,
	outputDir: 'dist',
	productionSourceMap: false, 
	devServer: {
		open: true, 
		host: '0.0.0.0',
		port: 8090,
		https: false,
		hotOnly: false,
		proxy: null,
		before: app => {}
	}
}
