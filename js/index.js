let jobs=[
    {id:1, companyName:"Mobile First Corp", position:"React Native Developer", location:"Remote" ,type:"Full-time", salary:"$130,000 - $175,000", description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", jobStatus:"applied"},
    {id:2, companyName:"WebFlow Agency", position:"Web Designer & Developer", location:"Los Angeles, CA" ,type:"Part-time", salary:"$80,000 - $120,000", description:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", jobStatus:"applied"},
    {id:3, companyName:"DataViz Solutions", position:"Data Visualization Specialist", location:"Boston, MA" ,type:"Full-time", salary:"$125,000 - $165,000", description:"Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", jobStatus:"applied"},
    {id:4, companyName:"CloudFirst Inc", position:"Backend Developer", location:"Seattle, WA" ,type:"Full-time", salary:"$140,000 - $190,000", description:"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", jobStatus:"applied"},
    {id:5, companyName:"Innovation Labs", position:"UI/UX Engineer", location:"Austin, TX" ,type:"Part-time", salary:"$110,000 - $150,000", description:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", jobStatus:"applied"},
    {id:6, companyName:"MegaCorp Solutions", position:"JavaScript Developer", location:"New York, NY" ,type:"Full-time", salary:"$130,000 - $170,00", description:"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", jobStatus:"applied"},
    {id:7, companyName:"StartupXYZ", position:"Full Stack Engineer", location:"Remote" ,type:"Full-time", salary:"$120,000 - $160,000", description:"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", jobStatus:"applied"},
    {id:8, companyName:"TechCorp Industries", position:"Senior Frontend Developer", location:"San Francisco, CA" ,type:"Full-time", salary:"$130,000 - $175,000", description:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", jobStatus:"applied"},
];
let interviewCards=[];
let rejectedCards=[];

console.log(jobs);
if(jobs.length===0)
{
         document.getElementById("jobContainer").classList.add("hidden");
        document.getElementById("emptyCard").classList.remove("hidden");
}
else{
         document.getElementById("jobContainer").classList.remove("hidden");
        document.getElementById("emptyCard").classList.add("hidden");

for(let x of jobs)
{  
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
    let cards=`    <div class="card bg-[#FFFFFF] p-5 rounded-lg py-6 border-l-4" style="border-left-color:${color}">
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
    document.getElementById("jobContainer").innerHTML+=cards;
}



}