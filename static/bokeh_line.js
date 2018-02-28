(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("0eb5b09f-f50b-4ac2-8247-55311c3ae31a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0eb5b09f-f50b-4ac2-8247-55311c3ae31a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"3c2b6838-e752-4a65-80ff-9663d4309fb1":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bc9ce08c-e867-4188-811f-3f5ca8e9ac2d","type":"PanTool"},{"id":"c8a6b4d6-a796-4dca-9102-a057d57d6bd0","type":"BoxZoomTool"},{"id":"50598357-5b51-46eb-9dba-47e9d8b9d797","type":"WheelZoomTool"},{"id":"0d1ccf7c-7e23-4958-8f58-88b7ab1248a4","type":"ResetTool"},{"id":"4fbabf6e-13f0-4114-b1ea-6eaba1e93a8a","type":"SaveTool"},{"id":"24dda83d-1cb8-48ef-a6f8-3dff800924cd","type":"HoverTool"}]},"id":"f4823c49-00ea-446b-8091-20451a68515e","type":"Toolbar"},{"attributes":{"children":[{"id":"86da7707-6fa7-4129-8fa9-d9ab2371364d","type":"WidgetBox"},{"id":"15c343a4-39ac-4e11-8dbc-47334311eebd","type":"WidgetBox"},{"id":"0d7defc4-2e8e-4727-98ed-bf1c8c56a4f8","subtype":"Figure","type":"Plot"}]},"id":"5f9638e2-adfc-4e2f-8f5e-897d8f06b93c","type":"Column"},{"attributes":{"line_color":"#fc8d59","line_width":2,"x":{"field":"x"},"y":{"field":"S"}},"id":"db0dabf3-98bb-47bb-9190-69ee01f496ae","type":"Line"},{"attributes":{},"id":"8fdde1a6-7735-422c-b668-d151356e13d0","type":"LinearScale"},{"attributes":{"callback":null},"id":"3531a015-1a20-4da1-a5b4-b17e9f4ea5a0","type":"DataRange1d"},{"attributes":{},"id":"25487b04-68fc-499f-9656-b00aa31d66c2","type":"LinearScale"},{"attributes":{"callback":null},"id":"78a1984c-6ca9-49f1-a72e-a7bedc13e30c","type":"DataRange1d"},{"attributes":{"line_color":"#e6f598","line_width":2,"x":{"field":"x"},"y":{"field":"W"}},"id":"78cd75d8-0bfb-42b9-938a-baada9dba5b9","type":"Line"},{"attributes":{"axis_label":"fee (dollars)","formatter":{"id":"050bfffe-fbd6-438a-9d76-e074e8f36a9a","type":"BasicTickFormatter"},"plot":{"id":"0d7defc4-2e8e-4727-98ed-bf1c8c56a4f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"353f94de-2510-4df7-8c1e-797452615f0f","type":"BasicTicker"}},"id":"123a8cfb-2305-486d-9452-318f1bbaedf1","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","total","N","W","L","S","index"],"data":{"L":{"__ndarray__":"jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/jDLxKOFe0T+MMvEo4V7RP4wy8SjhXtE/","dtype":"float64","shape":[51]},"N":{"__ndarray__":"/T8qYVDc2D+7bGFHv67YP3qZmC0ugdg/OMbPE51T2D/18gb6CybYP7QfPuB6+Nc/ckx1xunK1z8xeaysWJ3XP++l45LHb9c/rdIaeTZC1z9q/1FfpRTXPyksiUUU59Y/5ljAK4O51j+lhfcR8ovWP2SyLvhgXtY/Id9l3s8w1j/fC53EPgPWP5041Kqt1dU/XGULkRyo1T8ZkkJ3i3rVP9i+eV36TNU/leuwQ2kf1T9UGOgp2PHUPxNFHxBHxNQ/0HFW9rWW1D+Ono3cJGnUP0zLxMKTO9Q/Cvj7qAIO1D/JJDOPceDTP4dRanXgstM/RH6hW0+F0z8Dq9hBvlfTP8HXDygtKtM/fwRHDpz80j89MX70Cs/SP/tdtdp5odI/uYrswOhz0j94tyOnV0bSPzbkWo3GGNI/8xCSczXr0T+xPclZpL3RP29qAEATkNE/LZc3JoJi0T/sw24M8TTRP6rwpfJfB9E/aB3d2M7Z0D8mShS/PazQP+R2S6WsftA/oqOCixtR0D9g0LlxiiPQPz764a/y688/","dtype":"float64","shape":[51]},"S":{"__ndarray__":"dy/baCn0rz9gDIYb6syvP0jpMM6qpa8/NMbbgGt+rz8do4YzLFevPwaAMebsL68/7lzcmK0Irz/XOYdLbuGuP8EWMv4uuq4/qvPcsO+Srj+T0IdjsGuuP3ytMhZxRK4/ZordyDEdrj9OZ4h78vWtPzhEMy6zzq0/ICHe4HOnrT8K/oiTNICtP/PaM0b1WK0/3Lfe+LUxrT/FlImrdgqtP65xNF4346w/l07fEPi7rD+AK4rDuJSsP2kINXZ5baw/UuXfKDpGrD88worb+h6sPyWfNY6796s/DnzgQHzQqz/4WIvzPKmrP+E1Nqb9gas/yhLhWL5aqz+y74sLfzOrP5zMNr4/DKs/hanhcADlqj9vhowjwb2qP1djN9aBlqo/QUDiiEJvqj8qHY07A0iqPxP6N+7DIKo//NbioIT5qT/ms41TRdKpP86QOAYGq6k/uG3juMaDqT+hSo5rh1ypP4onOR5INak/cwTk0AgOqT9d4Y6DyeaoP0W+OTaKv6g/Lpvk6EqYqD8YeI+bC3GoPwBVOk7MSag/","dtype":"float64","shape":[51]},"W":{"__ndarray__":"eVY3YDEgyT/mcheWjfjIP1KP98vp0Mg/vKvXAUapyD8nyLc3ooHIP5Tkl23+Wcg//gB4o1oyyD9qHVjZtgrIP9Y5OA8T48c/QFYYRW+7xz+scvh6y5PHPxmP2LAnbMc/g6u45oNExz/ux5gc4BzHP1rkeFI89cY/xgBZiJjNxj8wHTm+9KXGP5s5GfRQfsY/B1b5Ka1Wxj9yctlfCS/GP96OuZVlB8Y/SquZy8HfxT+0x3kBHrjFPyDkWTd6kMU/jAA6bdZoxT/3HBqjMkHFP2M5+tiOGcU/zlXaDuvxxD85crpER8rEP6WOmnqjosQ/EKt6sP96xD97x1rmW1PEP+bjOhy4K8Q/UgAbUhQExD++HPuHcNzDPyg5273MtMM/lFW78yiNwz8AcpsphWXDP2uOe1/hPcM/1qpblT0Wwz9CxzvLme7CP6zjGwH2xsI/GAD8NlKfwj+EHNxsrnfCP+84vKIKUMI/WlWc2GYowj/GcXwOwwDCPzKOXEQf2cE/nKo8enuxwT8Ixxyw14nBP3Tj/OUzYsE/","dtype":"float64","shape":[51]},"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"total":{"__ndarray__":"AAAAAAAA8D96GDnovNnvP/QwctB5s+8/bEmruDaN7z/lYeSg82bvP196HYmwQO8/2JJWcW0a7z9Sq49ZKvTuP8zDyEHnze4/RNwBKqSn7j+99DoSYYHuPzgNdPodW+4/sCWt4to07j8qPubKlw7uP6NWH7NU6O0/HG9YmxHC7T+Wh5GDzpvtPw6gymuLde0/ibgDVEhP7T8A0Tw8BSntP3vpdSTCAu0/8wGvDH/c7D9tGuj0O7bsP+gyId34j+w/X0taxbVp7D/ZY5OtckPsP1J8zJUvHew/y5QFfuz26z9FrT5mqdDrP77Fd05mqus/N96wNiOE6z+w9uke4F3rPyoPIwedN+s/oydc71kR6z8cQJXXFuvqP5VYzr/TxOo/D3EHqJCe6j+JiUCQTXjqPwKieXgKUuo/erqyYMcr6j/z0utIhAXqP2zrJDFB3+k/5gNeGf646T9gHJcBu5LpP9o00Ol3bOk/UU0J0jRG6T/LZUK68R/pP0R+e6Ku+eg/vpa0imvT6D84r+1yKK3oP7DHJlvlhug/","dtype":"float64","shape":[51]},"x":{"__ndarray__":"AAAAAAAAAACamZmZmZm5P5qZmZmZmck/NDMzMzMz0z+amZmZmZnZPwAAAAAAAOA/NDMzMzMz4z9nZmZmZmbmP5qZmZmZmek/zczMzMzM7D8AAAAAAADwP5qZmZmZmfE/NDMzMzMz8z/NzMzMzMz0P2dmZmZmZvY/AAAAAAAA+D+amZmZmZn5PzQzMzMzM/s/zczMzMzM/D9nZmZmZmb+PwAAAAAAAABAzczMzMzMAECamZmZmZkBQGdmZmZmZgJANDMzMzMzA0AAAAAAAAAEQM3MzMzMzARAmpmZmZmZBUBnZmZmZmYGQDQzMzMzMwdAAAAAAAAACEDNzMzMzMwIQJqZmZmZmQlAZ2ZmZmZmCkA0MzMzMzMLQAAAAAAAAAxAzczMzMzMDECamZmZmZkNQGdmZmZmZg5ANDMzMzMzD0AAAAAAAAAQQGdmZmZmZhBAzczMzMzMEEAzMzMzMzMRQJqZmZmZmRFAAAAAAAAAEkBnZmZmZmYSQM3MzMzMzBJANDMzMzMzE0CamZmZmZkTQAAAAAAAABRA","dtype":"float64","shape":[51]}}},"id":"b39ad6f6-3e8a-45b1-a54a-5490c4b214ea","type":"ColumnDataSource"},{"attributes":{},"id":"353f94de-2510-4df7-8c1e-797452615f0f","type":"BasicTicker"},{"attributes":{"line_color":"#fee08b","line_width":2,"x":{"field":"x"},"y":{"field":"L"}},"id":"de5a742d-ab89-4bd0-a215-1c4efe199cd4","type":"Line"},{"attributes":{"plot":{"id":"0d7defc4-2e8e-4727-98ed-bf1c8c56a4f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"353f94de-2510-4df7-8c1e-797452615f0f","type":"BasicTicker"}},"id":"4bfc508a-7686-4675-9570-9d46d2f979f9","type":"Grid"},{"attributes":{"axis_label":"proportion of taxi rides","formatter":{"id":"1ce604da-9448-46c9-9292-d1512465e468","type":"BasicTickFormatter"},"plot":{"id":"0d7defc4-2e8e-4727-98ed-bf1c8c56a4f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"80351142-4bde-4a05-8b96-ca4ff3b5910b","type":"BasicTicker"}},"id":"1fecb890-2434-49c4-b692-bc7fc370864e","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"0d7defc4-2e8e-4727-98ed-bf1c8c56a4f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"80351142-4bde-4a05-8b96-ca4ff3b5910b","type":"BasicTicker"}},"id":"5df2d2ad-ef9d-490d-9f94-96ee46c75b0f","type":"Grid"},{"attributes":{},"id":"80351142-4bde-4a05-8b96-ca4ff3b5910b","type":"BasicTicker"},{"attributes":{"source":{"id":"b39ad6f6-3e8a-45b1-a54a-5490c4b214ea","type":"ColumnDataSource"}},"id":"c7049bb4-004f-497f-b32f-19d6c87b3564","type":"CDSView"},{"attributes":{"data_source":{"id":"b39ad6f6-3e8a-45b1-a54a-5490c4b214ea","type":"ColumnDataSource"},"glyph":{"id":"f096b74b-cdcc-4c26-98e9-836fa90b7c89","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ea9040b4-c8d0-4887-8867-bbb55186530a","type":"Line"},"selection_glyph":null,"view":{"id":"9462f7a8-a8c7-4ec3-81ac-635e5061a5fd","type":"CDSView"}},"id":"4275db59-dc04-4990-9569-ccb8e8b6195e","type":"GlyphRenderer"},{"attributes":{"line_color":"#99d594","line_width":2,"x":{"field":"x"},"y":{"field":"N"}},"id":"f096b74b-cdcc-4c26-98e9-836fa90b7c89","type":"Line"},{"attributes":{"data_source":{"id":"b39ad6f6-3e8a-45b1-a54a-5490c4b214ea","type":"ColumnDataSource"},"glyph":{"id":"78cd75d8-0bfb-42b9-938a-baada9dba5b9","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"acfeaf6b-6646-4755-9187-afe2a5f14ef7","type":"Line"},"selection_glyph":null,"view":{"id":"0a907c8e-922b-481d-974d-636f5a115d13","type":"CDSView"}},"id":"fc9a266d-73cf-4aa4-abf4-46f27b7bf768","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"N"}},"id":"ea9040b4-c8d0-4887-8867-bbb55186530a","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"L"}},"id":"18cfc076-4e0e-47ec-83da-91bf37fd301b","type":"Line"},{"attributes":{},"id":"050bfffe-fbd6-438a-9d76-e074e8f36a9a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"b39ad6f6-3e8a-45b1-a54a-5490c4b214ea","type":"ColumnDataSource"},"glyph":{"id":"de5a742d-ab89-4bd0-a215-1c4efe199cd4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18cfc076-4e0e-47ec-83da-91bf37fd301b","type":"Line"},"selection_glyph":null,"view":{"id":"d8421c9c-6e05-423e-b030-e70ae519b3f0","type":"CDSView"}},"id":"1456b4bc-493e-4812-a461-a1fcba6365a2","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"72097077-0356-46cc-9456-efdc5e44b43b","type":"Slider"}]},"id":"15c343a4-39ac-4e11-8dbc-47334311eebd","type":"WidgetBox"},{"attributes":{"data_source":{"id":"b39ad6f6-3e8a-45b1-a54a-5490c4b214ea","type":"ColumnDataSource"},"glyph":{"id":"79dbcfb6-a2f6-4deb-ae7e-0c060fe4fa55","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"05655236-4c62-4527-90d7-970f2eb07cae","type":"Line"},"selection_glyph":null,"view":{"id":"f712a54f-c8fa-454b-b795-6257fc812ee6","type":"CDSView"}},"id":"30d5e38e-2a3f-436e-abce-a34acb6ea0b7","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b39ad6f6-3e8a-45b1-a54a-5490c4b214ea","type":"ColumnDataSource"}},"id":"d8421c9c-6e05-423e-b030-e70ae519b3f0","type":"CDSView"},{"attributes":{},"id":"0d1ccf7c-7e23-4958-8f58-88b7ab1248a4","type":"ResetTool"},{"attributes":{"source":{"id":"b39ad6f6-3e8a-45b1-a54a-5490c4b214ea","type":"ColumnDataSource"}},"id":"9462f7a8-a8c7-4ec3-81ac-635e5061a5fd","type":"CDSView"},{"attributes":{"children":[{"id":"f914c999-af8a-480f-b4ef-90c385dacd2e","type":"Select"}]},"id":"86da7707-6fa7-4129-8fa9-d9ab2371364d","type":"WidgetBox"},{"attributes":{"callback":null,"tooltips":[["(x,y)","($x, $y)"]]},"id":"24dda83d-1cb8-48ef-a6f8-3dff800924cd","type":"HoverTool"},{"attributes":{},"id":"bc9ce08c-e867-4188-811f-3f5ca8e9ac2d","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0aaac063-142a-43a2-903a-2558a4625510","type":"BoxAnnotation"},{"attributes":{"source":{"id":"b39ad6f6-3e8a-45b1-a54a-5490c4b214ea","type":"ColumnDataSource"}},"id":"0a907c8e-922b-481d-974d-636f5a115d13","type":"CDSView"},{"attributes":{"callback":null,"options":["from the Loop","to the Loop"],"title":"direction","value":"from the Loop"},"id":"f914c999-af8a-480f-b4ef-90c385dacd2e","type":"Select"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"total"}},"id":"05655236-4c62-4527-90d7-970f2eb07cae","type":"Line"},{"attributes":{"callback":null,"end":1.0,"start":0.0,"step":0.1,"title":"price elasticity","value":0.5},"id":"72097077-0356-46cc-9456-efdc5e44b43b","type":"Slider"},{"attributes":{},"id":"4fbabf6e-13f0-4114-b1ea-6eaba1e93a8a","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"W"}},"id":"acfeaf6b-6646-4755-9187-afe2a5f14ef7","type":"Line"},{"attributes":{"source":{"id":"b39ad6f6-3e8a-45b1-a54a-5490c4b214ea","type":"ColumnDataSource"}},"id":"f712a54f-c8fa-454b-b795-6257fc812ee6","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"S"}},"id":"be94c168-65e6-4726-a716-a1149c5726fe","type":"Line"},{"attributes":{},"id":"1ce604da-9448-46c9-9292-d1512465e468","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"123a8cfb-2305-486d-9452-318f1bbaedf1","type":"LinearAxis"}],"left":[{"id":"1fecb890-2434-49c4-b692-bc7fc370864e","type":"LinearAxis"}],"renderers":[{"id":"123a8cfb-2305-486d-9452-318f1bbaedf1","type":"LinearAxis"},{"id":"4bfc508a-7686-4675-9570-9d46d2f979f9","type":"Grid"},{"id":"1fecb890-2434-49c4-b692-bc7fc370864e","type":"LinearAxis"},{"id":"5df2d2ad-ef9d-490d-9f94-96ee46c75b0f","type":"Grid"},{"id":"0aaac063-142a-43a2-903a-2558a4625510","type":"BoxAnnotation"},{"id":"30d5e38e-2a3f-436e-abce-a34acb6ea0b7","type":"GlyphRenderer"},{"id":"4275db59-dc04-4990-9569-ccb8e8b6195e","type":"GlyphRenderer"},{"id":"fc9a266d-73cf-4aa4-abf4-46f27b7bf768","type":"GlyphRenderer"},{"id":"1456b4bc-493e-4812-a461-a1fcba6365a2","type":"GlyphRenderer"},{"id":"06b37a6d-bf3a-4af9-ae49-c08e9e923f4e","type":"GlyphRenderer"}],"title":{"id":"f32cbef0-cd8b-47ec-a8d4-cdf15b877723","type":"Title"},"toolbar":{"id":"f4823c49-00ea-446b-8091-20451a68515e","type":"Toolbar"},"x_range":{"id":"78a1984c-6ca9-49f1-a72e-a7bedc13e30c","type":"DataRange1d"},"x_scale":{"id":"8fdde1a6-7735-422c-b668-d151356e13d0","type":"LinearScale"},"y_range":{"id":"3531a015-1a20-4da1-a5b4-b17e9f4ea5a0","type":"DataRange1d"},"y_scale":{"id":"25487b04-68fc-499f-9656-b00aa31d66c2","type":"LinearScale"}},"id":"0d7defc4-2e8e-4727-98ed-bf1c8c56a4f8","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"#3288bd","line_width":2,"x":{"field":"x"},"y":{"field":"total"}},"id":"79dbcfb6-a2f6-4deb-ae7e-0c060fe4fa55","type":"Line"},{"attributes":{"overlay":{"id":"0aaac063-142a-43a2-903a-2558a4625510","type":"BoxAnnotation"}},"id":"c8a6b4d6-a796-4dca-9102-a057d57d6bd0","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"b39ad6f6-3e8a-45b1-a54a-5490c4b214ea","type":"ColumnDataSource"},"glyph":{"id":"db0dabf3-98bb-47bb-9190-69ee01f496ae","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"be94c168-65e6-4726-a716-a1149c5726fe","type":"Line"},"selection_glyph":null,"view":{"id":"c7049bb4-004f-497f-b32f-19d6c87b3564","type":"CDSView"}},"id":"06b37a6d-bf3a-4af9-ae49-c08e9e923f4e","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Taxi traffic reduction by region"},"id":"f32cbef0-cd8b-47ec-a8d4-cdf15b877723","type":"Title"},{"attributes":{},"id":"50598357-5b51-46eb-9dba-47e9d8b9d797","type":"WheelZoomTool"}],"root_ids":["5f9638e2-adfc-4e2f-8f5e-897d8f06b93c"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"3c2b6838-e752-4a65-80ff-9663d4309fb1","elementid":"0eb5b09f-f50b-4ac2-8247-55311c3ae31a","modelid":"0d7defc4-2e8e-4727-98ed-bf1c8c56a4f8"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.13.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();