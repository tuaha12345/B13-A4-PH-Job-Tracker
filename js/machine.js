
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
        container.innerHTML += `<div class="card bg-[#FFFFFF] p-5 rounded-lg py-6 border-l-4" style="border-left-color:#DCFCE7">
            <div class="card-heading flex items-center justify-between ">
                <div class="left">
                    <h3 class="font-semibold text-[18px]">${x.companyName}</h3>
                    <p class="text-[16px] text-[#64748B]">${x.position}</p>
                </div>
                <div class="right">
                <button class="border border-[#F1F2F4] rounded-full w-8 h-8 flex items-center justify-center">
                    <i class="fa-regular fa-trash-can text-[#64748B]" onclick="deleteJob(${x.id})"></i>
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
        container.innerHTML += `    <div class="card bg-[#FFFFFF] p-5 rounded-lg py-6 border-l-4 " style="border-left-color:#FEE2E2">
            <div class="card-heading flex items-center justify-between ">
                <div class="left">
                    <h3 class="font-semibold text-[18px]">${x.companyName}</h3>
                    <p class="text-[16px] text-[#64748B]">${x.position}</p>
                </div>
                <div class="right">
                <button class="border border-[#F1F2F4] rounded-full w-8 h-8 flex items-center justify-center">
                    <i class="fa-regular fa-trash-can text-[#64748B]" onClick="deleteJob(${x.id})"></i>
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
            let color="#f7f8f8";
            let status = "";
            if(x.jobStatus==="interview")
            {
                status = `<button class="btn btn-success text-amber-50 p-3 mt-5">INTERVIEW</button>`;
                color="#DCFCE7";
            }
            else if(x.jobStatus==="rejected")
            {
                status = `<button class="btn btn-error text-amber-50 p-3 mt-5">REJECTED</button>`;
                color="#FEE2E2";
            }
            else
            {
                status = `<button class="btn btn-soft btn-info text-gray-700 p-3 mt-5">NOT APPLIED</button>`;
                color="#f7f8f8";
            }
            container.innerHTML +=`    <div class="card bg-[#FFFFFF] p-5 rounded-lg py-6 border-l-4" style="border-left-color:${color}">
                            <div class="card-heading flex items-center justify-between ">
                                <div class="left">
                                    <h3 class="font-semibold text-[18px]">${x.companyName}</h3>
                                    <p class="text-[16px] text-[#64748B]">${x.position}</p>
                                </div>
                                <div class="right">
                                <button class="border border-[#F1F2F4] rounded-full w-8 h-8 flex items-center justify-center">
                                    <i class="fa-regular fa-trash-can text-[#64748B]" onClick="deleteJob(${x.id})"></i>
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

   document.getElementById(id).classList.remove("hidden");

   if(id==="interviewContainer"){
     document.getElementById("interview").style.backgroundColor = "#71B3F2";
     document.getElementById("all").style.backgroundColor = "#FFFFFF";
     document.getElementById("reject").style.backgroundColor = "#FFFFFF";
     document.getElementById("filterCount").classList.remove("hidden");
     updateJobNumber(interviewCards.length);
   }
   else if(id==="rejectedContainer"){
        document.getElementById("reject").style.backgroundColor = "#71B3F2";
     document.getElementById("all").style.backgroundColor = "#FFFFFF";
     document.getElementById("interview").style.backgroundColor = "#FFFFFF";
    document.getElementById("filterCount").classList.remove("hidden");
     updateJobNumber(rejectedCards.length);
   }
   else{
        document.getElementById("all").style.backgroundColor = "#71B3F2";
     document.getElementById("interview").style.backgroundColor = "#FFFFFF";
     document.getElementById("reject").style.backgroundColor = "#FFFFFF";
    document.getElementById("filterCount").classList.add("hidden");
   }
   
   
   emptyCard(id);
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
    jobs = jobs.filter(x => x.id !== id);
    interviewCards = interviewCards.filter(x => x.id !== id);
    rejectedCards = rejectedCards.filter(x => x.id !== id);

    setInnerText("interviewCount", interviewCards.length);
    setInnerText("rejectedCount", rejectedCards.length);
    setInnerText("totalCount", jobs.length);
    setInnerText("jobNumber", jobs.length);

    renderAllJobs();
    renderInterviewJobs();
    renderRejectedJobs();

    const jobContainer = document.getElementById("jobContainer");
    const interviewContainer = document.getElementById("interviewContainer");
    const rejectedContainer = document.getElementById("rejectedContainer");
    const emptyCardEl = document.getElementById("emptyCard");

    if(jobs.length === 0) jobContainer.classList.add("hidden");
    if(interviewCards.length === 0) interviewContainer.classList.add("hidden");
    if(rejectedCards.length === 0) rejectedContainer.classList.add("hidden");





    const visibleContainer = [jobContainer, interviewContainer, rejectedContainer].find(c => !c.classList.contains("hidden"));

    if(!visibleContainer) {
        emptyCardEl.classList.remove("hidden");
    } else {
        emptyCardEl.classList.add("hidden");
    }

    updateEmptyCard();
    
    if(visibleContainer === interviewContainer) {
        updateJobNumber(interviewCards.length);
    } else if(visibleContainer === rejectedContainer) {
        updateJobNumber(rejectedCards.length);
    }
}

function emptyCard(id)
{
    // document.getElementById(id).classList.add("hidden");
    // document.getElementById("emptyCard").classList.remove("hidden");
    if(id==="jobContainer" && jobs.length===0)
    {
        document.getElementById("emptyCard").classList.remove("hidden");
    }
    else if(id==="interviewContainer" && interviewCards.length===0)
    {
        document.getElementById("emptyCard").classList.remove("hidden");
    }
    else if(id==="rejectedContainer" && rejectedCards.length===0)
    {
        document.getElementById("emptyCard").classList.remove("hidden");
    }
    else{
        document.getElementById("emptyCard").classList.add("hidden");
    }
}

function updateEmptyCard() {
    const jobContainer = document.getElementById("jobContainer");
    const interviewContainer = document.getElementById("interviewContainer");
    const rejectedContainer = document.getElementById("rejectedContainer");
    const emptyCardEl = document.getElementById("emptyCard");

    const visibleContainer = [jobContainer, interviewContainer, rejectedContainer].find(x => !x.classList.contains("hidden"));

    if(!visibleContainer || (visibleContainer === jobContainer && jobs.length === 0) ||(visibleContainer === interviewContainer && interviewCards.length === 0) ||(visibleContainer === rejectedContainer && rejectedCards.length === 0))
         {
        emptyCardEl.classList.remove("hidden");
    } 
    else {
        emptyCardEl.classList.add("hidden");
    }
}

function updateJobNumber(filteredJobsLength)
{
    setInnerText("filterNumber", filteredJobsLength);
}