const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'data/projects.json'),'utf8'));
assert(Array.isArray(data)&&data.length>=20);
const ids=new Set();
for(const p of data){
 for(const key of ['id','title','cat','summary','detail','status'])assert.equal(typeof p[key],'string',`${p.id}: missing ${key}`);
 assert(!ids.has(p.id),`duplicate ${p.id}`);ids.add(p.id);
 assert(fs.existsSync(path.join(root,p.detail,'index.html')),`missing detail ${p.detail}`);
}
const home=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(home.includes('id="project-grid"'));
const taxi=data.find(p=>p.id==='fare-ml');
assert(taxi.title.includes('Kaggle ML Challenge'));
assert(home.includes('Taxi Fare Prediction — Kaggle ML Challenge'));
const detail=fs.readFileSync(path.join(root,taxi.detail,'index.html'),'utf8');
assert(detail.includes('2.52019'));
console.log(`PASS: ${data.length} projects, detail files, taxi promotion and homepage.`);
