(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{kY17:function(t,a,e){"use strict";e.r(a),e.d(a,"TripappModule",function(){return C});var i=e("ofXK"),n=e("fXoL"),o=e("IYfF"),c=e("XhcP"),r=e("MutI"),s=e("tyNb"),d=e("NFeN"),b=e("FKr1"),l=e("/t3+"),p=e("bTqV");function u(t,a){if(1&t){const t=n.Yb();n.Xb(0,"mat-toolbar",9),n.Xb(1,"button",10),n.hc("click",function(){return n.Ac(t),n.lc(),n.yc(4).toggle()}),n.Xb(2,"mat-icon"),n.Ic(3,"menu"),n.Wb(),n.Wb(),n.Xb(4,"span"),n.Ic(5,"WONDERFUL INDONESIA"),n.Wb(),n.Sb(6,"div",11),n.Xb(7,"button",12),n.Ic(8),n.Wb(),n.Xb(9,"button",13),n.hc("click",function(){return n.Ac(t),n.lc().authService.SignOut()}),n.Xb(10,"mat-icon",5),n.Ic(11,"logout"),n.Wb(),n.Ic(12," LogOut "),n.Wb(),n.Wb()}if(2&t){const t=a.ngIf;n.Eb(8),n.Jc(t.email)}}let h=(()=>{class t{constructor(t){this.authService=t,this.mode="side",this.menu=[{name:"Dashboard",icon:"dashboard",url:"/tripapp/addpaket"},{name:"Edit Image",icon:"camera_enchance",url:"/tripnapp/addpaket"},{group:"Menu Group",children:[{name:"Image Gallery",icon:"images",url:"/tripapp/gallery"}]}]}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)(n.Rb(o.a))},t.\u0275cmp=n.Lb({type:t,selectors:[["app-tripapp"]],decls:20,vars:9,consts:[["color","primary","class","example-header",4,"ngIf"],[1,"tripapp-container"],["mode","side","opened","",1,"sidenav-left",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],["sidenav",""],["routerLink","/tripapp/addpaket"],["matListIcon",""],["matLine",""],["mode","side",1,"example-sidenav",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],[2,"padding","20px"],["color","primary",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["mat-button","",1,"mx-3"],["mat-button","",3,"click"]],template:function(t,a){1&t&&(n.Vb(0),n.Gc(1,u,13,1,"mat-toolbar",0),n.Xb(2,"mat-sidenav-container",1),n.Xb(3,"mat-sidenav",2,3),n.Xb(5,"mat-nav-list"),n.Xb(6,"mat-list-item",4),n.Xb(7,"mat-icon",5),n.Ic(8,"home"),n.Wb(),n.Xb(9,"h3",6),n.Ic(10,"Dashboard"),n.Wb(),n.Wb(),n.Xb(11,"mat-list-item",4),n.Xb(12,"mat-icon",5),n.Ic(13,"camera_enchance"),n.Wb(),n.Xb(14,"h3",6),n.Ic(15,"Edit Image"),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Sb(16,"mat-sidenav",7,3),n.Xb(18,"mat-sidenav-content",8),n.Sb(19,"router-outlet"),n.Wb(),n.Wb(),n.Ub()),2&t&&(n.Eb(1),n.qc("ngIf",a.authService.userData),n.Eb(2),n.qc("position","start")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0),n.Eb(13),n.qc("position","end")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0))},directives:[i.l,c.b,c.a,r.f,r.d,s.b,d.a,r.c,b.j,c.c,s.d,l.a,p.a],styles:[".spacer[_ngcontent-%COMP%]{flex-grow:1}.container[_ngcontent-%COMP%]{padding:50px 100px}"]}),t})();var m=e("0IaG"),f=e("I/3d"),g=e("UbJi"),W=e("dNgK"),X=e("qFsG"),k=e("3Pt+");let I=(()=>{class t{constructor(t,a,e,i,n){this.dialogRef=t,this.data=a,this.afs=e,this.auth=i,this.snackbar=n,this.userData={},this.user={}}ngOnInit(){this.auth.user.subscribe(t=>{this.userData=t})}openSnackBar(t,a){this.snackbar.open(t,a)}simpan(){if(null==this.data.id){const t=(new Date).getTime().toString();this.data.uid=this.userData.uid,this.afs.collection("trips").doc(t).set(this.data).then(t=>{this.openSnackBar("Selamat data anda berhasil disimpan!","ok"),this.dialogRef.close()}).catch(t=>{this.openSnackBar("Data tidak berhasil disimpan","ok"),console.log(t)})}else(new Date).getTime().toString(),this.data.uid=this.userData.uid,this.afs.collection("trips").doc(this.data.id).update(this.data).then(t=>{this.openSnackBar("Selamat data anda berhasil diupdate!","ok"),this.dialogRef.close()}).catch(t=>{console.log(t),this.openSnackBar("Maaf anda tidak dapat menyimpan data","ok")})}}return t.\u0275fac=function(a){return new(a||t)(n.Rb(m.e),n.Rb(m.a),n.Rb(f.a),n.Rb(g.a),n.Rb(W.a))},t.\u0275cmp=n.Lb({type:t,selectors:[["app-wisatadetails"]],decls:28,vars:5,consts:[[1,"font-weight-bold"],[1,"form-group"],["for","title"],["type","text","id","title","required","","matInput","","name","title",1,"form-control",3,"ngModel","ngModelChange"],["for","Daerah"],["type","text","id","daerah","required","","matInput","","name","daerah",1,"form-control",3,"ngModel","ngModelChange"],["for","harga"],["type","text","id","harga","required","","matInput","","name","harga",1,"form-control",3,"ngModel","ngModelChange"],["for","fasilitas"],["type","text","id","fasilitas","required","","matInput","","name","fasilitas",1,"form-control",3,"ngModel","ngModelChange"],["for","deskripsi"],["type","text","id","deskripsi","required","","matInput","","name","deskripsi",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-end"],["mat-dialog-close","",1,"btn","btn-danger","mr-3"],[1,"btn","btn-success",3,"click"]],template:function(t,a){1&t&&(n.Xb(0,"h3",0),n.Ic(1,"Tambah Paket Wisata"),n.Wb(),n.Xb(2,"div"),n.Xb(3,"div",1),n.Xb(4,"label",2),n.Ic(5,"Title"),n.Wb(),n.Xb(6,"input",3),n.hc("ngModelChange",function(t){return a.data.title=t}),n.Wb(),n.Wb(),n.Xb(7,"div",1),n.Xb(8,"label",4),n.Ic(9,"Daerah"),n.Wb(),n.Xb(10,"input",5),n.hc("ngModelChange",function(t){return a.data.daerah=t}),n.Wb(),n.Wb(),n.Xb(11,"div",1),n.Xb(12,"label",6),n.Ic(13,"Harga"),n.Wb(),n.Xb(14,"input",7),n.hc("ngModelChange",function(t){return a.data.harga=t}),n.Wb(),n.Wb(),n.Xb(15,"div",1),n.Xb(16,"label",8),n.Ic(17,"Fasilitas"),n.Wb(),n.Xb(18,"input",9),n.hc("ngModelChange",function(t){return a.data.fasilitas=t}),n.Wb(),n.Wb(),n.Xb(19,"div",1),n.Xb(20,"label",10),n.Ic(21,"Deskripsi Wisata"),n.Wb(),n.Xb(22,"textarea",11),n.hc("ngModelChange",function(t){return a.data.deskripsi=t}),n.Wb(),n.Wb(),n.Xb(23,"div",12),n.Xb(24,"button",13),n.Ic(25,"Batal"),n.Wb(),n.Xb(26,"button",14),n.hc("click",function(){return a.simpan()}),n.Ic(27,"Submit"),n.Wb(),n.Wb(),n.Wb()),2&t&&(n.Eb(6),n.qc("ngModel",a.data.title),n.Eb(4),n.qc("ngModel",a.data.daerah),n.Eb(4),n.qc("ngModel",a.data.harga),n.Eb(4),n.qc("ngModel",a.data.fasilitas),n.Eb(4),n.qc("ngModel",a.data.deskripsi))},directives:[X.b,k.c,k.n,k.i,k.k,m.c],styles:[""]}),t})();var x=e("Wp6s"),v=e("STbY");function M(t,a){if(1&t){const t=n.Yb();n.Xb(0,"mat-list-item"),n.Sb(1,"img",4),n.Xb(2,"h3",5),n.Ic(3),n.Wb(),n.Xb(4,"h4",6),n.Xb(5,"span"),n.Ic(6),n.Wb(),n.Wb(),n.Xb(7,"button",7),n.Xb(8,"mat-icon"),n.Ic(9,"more_vert"),n.Wb(),n.Wb(),n.Xb(10,"mat-menu",null,8),n.Xb(12,"button",9),n.hc("click",function(){n.Ac(t);const e=a.$implicit,i=a.index;return n.lc().detailWisata(e,i)}),n.Ic(13,"Edit"),n.Wb(),n.Xb(14,"button",9),n.hc("click",function(){n.Ac(t);const e=a.$implicit,i=a.index;return n.lc().deleteProduct(e,i)}),n.Ic(15,"Delete"),n.Wb(),n.Wb(),n.Wb()}if(2&t){const t=a.$implicit,e=n.yc(11);n.Eb(3),n.Jc(t.title),n.Eb(3),n.Jc(t.id),n.Eb(1),n.qc("matMenuTriggerFor",e)}}let w=(()=>{class t{constructor(t,a,e,i){this.dialog=t,this.afs=a,this.auth=e,this.snackbar=i,this.trip={},this.trips=[],this.userData={}}ngOnInit(){this.auth.user.subscribe(t=>{this.userData=t,this.getTrip()})}openSnackBar(t,a){this.snackbar.open(t,a)}getTrip(){this.afs.collection("trips",t=>t.where("uid","==",this.userData.uid)).valueChanges({idField:"id"}).subscribe(t=>{console.log(t),this.trips=t},t=>{console.log(t)})}detailWisata(t,a){this.dialog.open(I,{width:"450px",data:t}).afterClosed().subscribe(e=>{e&&(-1==a?this.trips.push(e):this.trips[a]=t)})}deleteProduct(t,a){confirm("Delete item?")&&this.afs.collection("trips").doc(t.id).delete().then(t=>{this.openSnackBar("Data berhasil dihapus","ok")}).catch(t=>{this.openSnackBar("Silahkan coba lagi, Data tidak dapat dihapus","ok")})}}return t.\u0275fac=function(a){return new(a||t)(n.Rb(m.b),n.Rb(f.a),n.Rb(g.a),n.Rb(W.a))},t.\u0275cmp=n.Lb({type:t,selectors:[["app-addpaket"]],decls:11,vars:1,consts:[[1,"d-flex","justify-content-end","mx-5"],[1,"btn","btn-primary","mb-4","mt-3","mx-5",3,"click"],[1,"container"],[4,"ngFor","ngForOf"],["matListAvatar","","img","","src","https://img.icons8.com/fluent/48/000000/glacier.png"],["matLine","",1,"font-weight-bold"],["matLine",""],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(t,a){1&t&&(n.Xb(0,"div",0),n.Xb(1,"button",1),n.hc("click",function(){return a.detailWisata({},-1)}),n.Ic(2,"Tambah Database Produk"),n.Wb(),n.Wb(),n.Xb(3,"div",2),n.Xb(4,"mat-card"),n.Xb(5,"mat-card-header"),n.Xb(6,"mat-card-title"),n.Ic(7,"Daftar Wisata"),n.Wb(),n.Wb(),n.Xb(8,"mat-card-content"),n.Xb(9,"mat-list"),n.Gc(10,M,16,3,"mat-list-item",3),n.Wb(),n.Wb(),n.Wb(),n.Wb()),2&t&&(n.Eb(10),n.qc("ngForOf",a.trips))},directives:[x.a,x.c,x.e,x.b,r.a,i.k,r.d,r.b,b.j,p.a,v.d,d.a,v.a,v.b],styles:[".buttons[_ngcontent-%COMP%]{border:none;border-radius:24px;color:#fff;padding:10px 25px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:20px auto;transition-duration:.4s;cursor:pointer}.button2[_ngcontent-%COMP%]{background-color:#fff;color:#000;border:2px solid #14213d}.button2[_ngcontent-%COMP%]:hover{background-color:#14213d;color:#fff}"]}),t})(),y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=n.Lb({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,a){1&t&&(n.Xb(0,"p"),n.Ic(1,"dashboard works!"),n.Wb())},styles:[""]}),t})();var D=e("p5R8");const S=[{path:"",component:h,children:[{path:"dashboard",component:y},{path:"addpaket",component:w},{path:"wisatadetail",component:I}]}];let C=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=n.Pb({type:t}),t.\u0275inj=n.Ob({imports:[[i.c,D.a,s.c.forChild(S),k.e]]}),t})()}}]);