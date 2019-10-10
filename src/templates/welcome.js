`
<gv-sidemenu>
            <side-menu>
                <side-title>Welcome</side-title>
                <menu-button href=AA default >Recent projects</menu-button>
                <menu-button href=BB >New project</menu-button>
            </side-menu>
            <side-content>
                <side-page href=AA default>
                  <div id="recent_projects" style="max-height:260px; padding-right:10px; overflow:auto;">
                  
                   ${(function() {
                     let list_projects = "";
                     for (i = 0; i < log.length; i++) {
                       const project = document.createElement("div");
                       project.setAttribute("class", "section-2");
                       project.setAttribute(
                         "onclick",
                         `Explorer.load('${log[i].Path.replace(
                           /\\/g,
                           "\\\\"
                         )}','g_directories','yes'); closeWindow('welcome_window'); `
                       );
                       project.innerText = log[i].Name;
                       const description = document.createElement("p");
                       description.innerText = log[i].Path;
                       description.setAttribute("style", "font-size:12px;");
                       project.appendChild(description);
                       list_projects += project.outerHTML;
                     }
                     return list_projects;
                   })()}
                  
                 </div>
                <div style="display:flex; justify-content:flex-end; margin-top:20px;">
                  <button onclick="openFolder(); closeWindow('welcome_window');" id='open_folder_welcome' class=" button1 translate_word" idT="OpenFolder">${getTranslation(
                    "OpenFolder"
                  )}</button> 
                </div>
                </side-page>
                <side-page href=BB>
                    ${(()=>{
                     let content = "";
                     projectServices.map((service,index)=>{
                        content += `
                           <div  class="section-2" onclick="projectServices[${index}].onclick()">
                              <h3 style="margin:0px 0;">${service.name}</h3>
                              <p>${service.description}</p>
                           </div>
                        `
                     })
                     return content;
                    })()}
                </side-page>
            </side-content>
        </gv-sidemenu>`;