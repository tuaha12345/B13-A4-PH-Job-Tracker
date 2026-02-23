
function getValue(id)
{
    return document.getElementById(id).value;
}
function setValue(id, value)
{
    document.getElementById(id).value = value;
}
function getInnerText(id)
{
    return document.getElementById(id).innerText;
}
function setInnerText(id, value)
{
    document.getElementById(id).innerText = value;
}


function renderInterviewJobs(){
    let container = document.getElementById("interviewContainer");
    container.innerHTML = "";

    for(let x of interviewCards){
        container.innerHTML += `<div class="card bg-[#FFFFFF] p-5 rounded-lg py-6 ">
            <div class="card-heading flex items-center justify-between ">
                <div class="left">
                    <h3 class="font-semibold text-[18px]">${x.companyName}</h3>
                    <p class="text-[16px] text-[#64748B]">${x.position}</p>
                </div>
                <div class="right">
                <button class="border border-[#F1F2F4] rounded-full w-8 h-8 flex items-center justify-center">
                    <i class="fa-regular fa-trash-can text-[#64748B] cursor-pointer" onclick="deleteJob(${x.id})"></i>
                </button>
                </div>
            </div>
            <div class="card-jobeType">
                <ul class="flex items-center gap-3 mt-3">
                    <li class="text-[14px] text-[#64748B]">${x.location}</li>
                    <li class="text-[14px] text-[#64748B]">•</li>
                    <li class="text-[14px] text-[#64748B]">${x.type}</li>
                    <li class="text-[14px] text-[#64748B]">•</li>
                    <li class="text-[14px] text-[#64748B]">${x.salary}</li>
                </ul>
            </div>
            <div class="card-button">
                <button class="btn btn-success text-amber-50 p-3 mt-5">INTERVIEW</button>
            </div>
            <div class="card-job-description">
                <p class="text-[14px] mt-5">${x.description}</p>
            </div>
            <div class="card-footer-button">
                <button class="btn btn-outline btn-success p-3 mt-5" onclick="interviewJob(${x.id})">INTERVIEW</button>
                <button class="btn btn-outline btn-error p-3 mt-5 ml-2" onclick="rejectJob(${x.id})">REJECTED</button>
            </div>
        </div>`;
    }
}

function renderRejectedJobs(){
    let container = document.getElementById("rejectedContainer");
    container.innerHTML = "";

    for(let x of rejectedCards){
        container.innerHTML += `    <div class="card bg-[#FFFFFF] p-5 rounded-lg py-6 ">
            <div class="card-heading flex items-center justify-between ">
                <div class="left">
                    <h3 class="font-semibold text-[18px]">${x.companyName}</h3>
                    <p class="text-[16px] text-[#64748B]">${x.position}</p>
                </div>
                <div class="right">
                <button class="border border-[#F1F2F4] rounded-full w-8 h-8 flex items-center justify-center">
                    <i class="fa-regular fa-trash-can text-[#64748B] cursor-pointer" onClick="deleteJob(${x.id})"></i>
                </button>
                </div>
            </div>
            <div class="card-jobeType">
                <ul class="flex items-center gap-3 mt-3">
                    <li class="text-[14px] text-[#64748B]">${x.location}</li>
                    <li class="text-[14px] text-[#64748B]">•</li>
                    <li class="text-[14px] text-[#64748B]">${x.type}</li>
                    <li class="text-[14px] text-[#64748B]">•</li>
                    <li class="text-[14px] text-[#64748B]">${x.salary}</li>
                </ul>
            </div>
            <div class="card-button">
                <button class="btn btn-error text-amber-50 p-3 mt-5 ">REJECTED</button>
            </div>
            <div class="card-job-description">
                <p class="text-[14px] mt-5">${x.description}</p>
            </div>
            <div class="card-footer-button">
                <button class="btn btn-outline btn-success p-3 mt-5" onclick="interviewJob(${x.id})">INTERVIEW</button>
                <button class="btn btn-outline btn-error p-3 mt-5 ml-2" onclick="rejectJob(${x.id})">REJECTED</button>
            </div>
        </div>`;
    }
}

function renderAllJobs(){
    let container = document.getElementById("jobContainer");
    container.innerHTML = "";
    for(let x of jobs){
            if(x.jobStatus==="interview")
            {
                status = `<button class="btn btn-success text-amber-50 p-3 mt-5">INTERVIEW</button>`;
            }
            else if(x.jobStatus==="rejected")
            {
                status = `<button class="btn btn-error text-amber-50 p-3 mt-5">REJECTED</button>`;
            }
            else
            {
                status = `<button class="btn btn-soft btn-info text-gray-700 p-3 mt-5">NOT APPLIED</button>`;
            }
            container.innerHTML +=`    <div class="card bg-[#FFFFFF] p-5 rounded-lg py-6 ">
                            <div class="card-heading flex items-center justify-between ">
                                <div class="left">
                                    <h3 class="font-semibold text-[18px]">${x.companyName}</h3>
                                    <p class="text-[16px] text-[#64748B]">${x.position}</p>
                                </div>
                                <div class="right">
                                <button class="border border-[#F1F2F4] rounded-full w-8 h-8 flex items-center justify-center">
                                    <i class="fa-regular fa-trash-can text-[#64748B] cursor-pointer" onClick="deleteJob(${x.id})"></i>
                                </button>
                                </div>
                            </div>
                            <div class="card-jobeType">
                                <ul class="flex items-center gap-3 mt-3">
                                    <li class="text-[14px] text-[#64748B]">${x.location}</li>
                                    <li class="text-[14px] text-[#64748B]">•</li>
                                    <li class="text-[14px] text-[#64748B]">${x.type}</li>
                                    <li class="text-[14px] text-[#64748B]">•</li>
                                    <li class="text-[14px] text-[#64748B]">${x.salary}</li>
                                </ul>
                            </div>
                            <div class="card-button">
                                ${status}
                            </div>
                            <div class="card-job-description">
                                <p class="text-[14px] mt-5">${x.description}</p>
                            </div>
                            <div class="card-footer-button">
                                <button class="btn btn-outline btn-success p-3 mt-5" onclick="interviewJob(${x.id})">INTERVIEW</button>
                                <button class="btn btn-outline btn-error p-3 mt-5 ml-2" onclick="rejectJob(${x.id})">REJECTED</button>
                            </div>
                        </div>`;
    }
}


function allJobs(id)
{
   document.getElementById("jobContainer").classList.add("hidden");
    document.getElementById("rejectedContainer").classList.add("hidden");
    document.getElementById("interviewContainer").classList.add("hidden");
    document.getElementById("emptyCard").classList.add("hidden");

   document.getElementById(id).classList.remove("hidden");
   if(id==="jobContainer")
   {
    document.getElementById("filterCount").classList.add("hidden");
    showEmptyOrData("jobContainer", jobs);
   }
   else if(id==="interviewContainer" || id==="rejectedContainer")
   {

    document.getElementById("filterCount").classList.remove("hidden");
    setInnerText("filterNumber", id==="interviewContainer"? interviewCards.length : rejectedCards.length);
    renderInterviewJobs();
    renderRejectedJobs();
    showEmptyOrData("interviewContainer", interviewCards); 
   }

   
}

function updateStatus(id,status)
{
    for(let x of jobs)
    {
        if(x.id===id)
        {
            x.jobStatus = status;
            break;
        }
    }
}

function deleteJob(id)
{ 
    
    jobs = jobs.filter(x=>x.id!==id);
    interviewCards = interviewCards.filter(x=>x.id!==id);
    rejectedCards = rejectedCards.filter(x=>x.id!==id);
    setInnerText("interviewCount", interviewCards.length);
    setInnerText("rejectedCount", rejectedCards.length);
    setInnerText("totalCount", jobs.length);
    setInnerText("jobNumber", jobs.length);
    // if(jobs.length===0)
    // {
    //     document.getElementById("jobContainer").classList.add("hidden");
    //     document.getElementById("interviewContainer").classList.add("hidden");
    //     document.getElementById("rejectedContainer").classList.add("hidden");
    //     document.getElementById("emptyCard").classList.remove("hidden");
    //     return;
    // }
        
    
    // if(interviewCards.length===0)
    // {
    //     document.getElementById("interviewContainer").classList.add("hidden");
    //     document.getElementById("jonContainer").classList.remove("hidden");
    //     // document.getElementById("emptyCard").classList.remove("hidden");
    // }
    // if(rejectedCards.length===0)

        
    // {
    //     document.getElementById("rejectedContainer").classList.add("hidden");
    //     document.getElementById("emptyCard").classList.remove("hidden");
    // }


    

    renderAllJobs();
    renderInterviewJobs();
    renderRejectedJobs();
    updateAllUI();
}

function updateAllUI(){
    setInnerText("totalCount", jobs.length);
    setInnerText("interviewCount", interviewCards.length);
    setInnerText("rejectedCount", rejectedCards.length);
    setInnerText("jobNumber", jobs.length);

    const interviewVisible = !document.getElementById("interviewContainer").classList.contains("hidden");
    const rejectedVisible = !document.getElementById("rejectedContainer").classList.contains("hidden");
    

    if (interviewVisible) {
        setInnerText("filterNumber", interviewCards.length);
    } else if (rejectedVisible) {
        setInnerText("filterNumber", rejectedCards.length);
    }

    
}

function showEmptyOrData(id,daraArray)
{
    const container = document.getElementById(id);
    const emptyCard = document.getElementById("emptyCard");
    if(daraArray.length===0)
    {
        container.classList.add("hidden");
        emptyCard.classList.remove("hidden");
    }
    else
    {
        container.classList.remove("hidden");
        emptyCard.classList.add("hidden");
    }
}

