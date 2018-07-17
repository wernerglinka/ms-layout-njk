# A site to test metalsmith-layout, metalsmith-in-place and jstransformer-nunjucks

When you build static websites with Metalsmith it is very likely that you use the metalsmith-layout (ML) and metalsmith-in-place  (MIP) plugins. If you are still using the old 1.x.x versions you may have tried to upgrade at one point to newer versions but found out that it was not a one-to-one replacement. Both plugin versions changed from using the Consolidation to the jsTransformer adapter plugin.  These adapters allow using different template engines through a normalized API.

I encountered an additional difficulty as I am using Nunjucks as the templating engine and I needed access to the Nunjucks environment to extend Nunjucks with custom filters. 

For a thorough explanation see my blogpost [Metalsmith, Layouts and Nunjucks](http://www.glinka.co/blog/metalsmith-layouts-nunjucks/)

To understand the differences I built this repo. 

The **master branch** is build with the latest plugin versions, metalsmith-layouts  2.1.0  and metalsmith-in-place 4.1.1, while the **obsolete branch** used metalsmith-layouts 1.6.5 and metalsmith-in-place 1.4.4 plus Nunjucks.
The third branch, **with_markdown** uses a markdown source file.

### Update 7/17/2018: 
Added another branch **in-place-only** to demonstrate the use of metalsmith-in-place plugin without using metalsmith-layouts.

**NOTE** This will only work when using html in the source file. The use of metalsmith-in-place to render the page in a single step requires the inclusion of template code in the source file. Review _src/index.njk_ in the in-place-only branch for an example. **If Markdown is used in the source file this will not work as the html/nunjucks code will interfere with the markdown to html transformation.**

* Use metalsmith-in-place only when the source file uses html
* Use metalsmith-in-place and metalsmith-layouts as demonstrated in branch _with_markdown_ when the source file uses markdown
