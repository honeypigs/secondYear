# 生产环境和开发环境的区别 #

**开发环境**：开发环境是程序猿们专门用于开发的服务器，配置可以比较随意， 为了开发调试方便，一般打开全部错误报告。

**测试环境**：一般是克隆一份生产环境的配置，一个程序在测试环境工作不正常，那么肯定不能把它发布到生产机上。

**生产环境**：是值正式提供对外服务的，一般会关掉错误报告，打开错误日志。


	在app.js中有三个错误处理程序
+ 404错误处理程序
	
		app.use(function(req, res, next) {
    		var err = new Error('Not Found');
    		err.status = 404;
			next(err);
		});
		捕获404错误并转发给错误处理器
+ 500错误处理程序
	+ 开发环境下的处理

			if (app.get('env') === 'development') {
			    app.use(function(err, req, res, next) {
	    	    	res.status(err.status || 500);
       				res.render('error', {
        	    		message: err.message,
        	   			 error: err
	       			});
				});
			}

	+ 生产环境下的处理

			app.use(function(err, req, res, next) {
	    	    res.status(err.status || 500);
       			res.render('error', {
        	    	message: err.message,
        	   		 error: err
	       		});
			});
	
在**开发环境**中即`app.get('env') === 'development'`，error的值为其本身。

在**生产环境**中error的值为一个对象，其中应该是错误日志而不是错误对象本身。


## `./bin/www` 中的 `onError` 和 `onListening` 函数用于处理端口错误，并没有理解。留待以后学习再次mark.##