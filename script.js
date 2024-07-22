gsap.registerPlugin(ScrollTrigger);

const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});



function files(index) {
    var data = `./images/1stpage_00000.png
    ./images/1stpage_00001.png
    ./images/1stpage_00002.png
    ./images/1stpage_00003.png
    ./images/1stpage_00004.png
    ./images/1stpage_00005.png
    ./images/1stpage_00006.png
    ./images/1stpage_00007.png
    ./images/1stpage_00008.png
    ./images/1stpage_00009.png
    ./images/1stpage_00010.png
    ./images/1stpage_00011.png
    ./images/1stpage_00012.png
    ./images/1stpage_00013.png
    ./images/1stpage_00014.png
    ./images/1stpage_00015.png
    ./images/1stpage_00016.png
    ./images/1stpage_00017.png
    ./images/1stpage_00018.png
    ./images/1stpage_00019.png
    ./images/1stpage_00020.png
    ./images/1stpage_00021.png
    ./images/1stpage_00022.png
    ./images/1stpage_00023.png
    ./images/1stpage_00024.png
    ./images/1stpage_00025.png
    ./images/1stpage_00026.png
    ./images/1stpage_00027.png
    ./images/1stpage_00028.png
    ./images/1stpage_00029.png
    ./images/1stpage_00030.png
    ./images/1stpage_00031.png
    ./images/1stpage_00032.png
    ./images/1stpage_00033.png
    ./images/1stpage_00034.png
    ./images/1stpage_00035.png
    ./images/1stpage_00036.png
    ./images/1stpage_00037.png
    ./images/1stpage_00038.png
    ./images/1stpage_00039.png
    ./images/1stpage_00040.png
    ./images/1stpage_00041.png
    ./images/1stpage_00042.png
    ./images/1stpage_00043.png
    ./images/1stpage_00044.png
    ./images/1stpage_00045.png
    ./images/1stpage_00046.png
    ./images/1stpage_00047.png
    ./images/1stpage_00048.png
    ./images/1stpage_00049.png
    ./images/1stpage_00050.png
    ./images/1stpage_00051.png
    ./images/1stpage_00052.png
    ./images/1stpage_00053.png
    ./images/1stpage_00054.png
    ./images/1stpage_00055.png
    ./images/1stpage_00056.png
    ./images/1stpage_00057.png
    ./images/1stpage_00058.png
    ./images/1stpage_00059.png
    ./images/1stpage_00060.png
    ./images/1stpage_00061.png
    ./images/1stpage_00062.png
    ./images/1stpage_00063.png
    ./images/1stpage_00064.png
    ./images/1stpage_00065.png
    ./images/1stpage_00066.png
    ./images/1stpage_00067.png
    ./images/1stpage_00068.png
    ./images/1stpage_00069.png
    ./images/1stpage_00070.png
    ./images/1stpage_00071.png
    ./images/1stpage_00072.png
    ./images/1stpage_00073.png
    ./images/1stpage_00074.png
    ./images/1stpage_00075.png
    ./images/1stpage_00076.png
    ./images/1stpage_00077.png
    ./images/1stpage_00078.png
    ./images/1stpage_00079.png
    ./images/1stpage_00080.png
    ./images/1stpage_00081.png
    ./images/1stpage_00082.png
    ./images/1stpage_00083.png
    ./images/1stpage_00084.png
    ./images/1stpage_00085.png
    ./images/1stpage_00086.png
    ./images/1stpage_00087.png
    ./images/1stpage_00088.png
    ./images/1stpage_00089.png
    ./images/1stpage_00090.png
    ./images/1stpage_00091.png
    ./images/1stpage_00092.png
    ./images/1stpage_00093.png
    ./images/1stpage_00094.png
    ./images/1stpage_00095.png
    ./images/1stpage_00096.png
    ./images/1stpage_00097.png
    ./images/1stpage_00098.png
    ./images/1stpage_00099.png
    ./images/1stpage_00100.png
    ./images/1stpage_00101.png
    ./images/1stpage_00102.png
    ./images/1stpage_00103.png
    ./images/1stpage_00104.png
    ./images/1stpage_00105.png
    ./images/1stpage_00106.png
    ./images/1stpage_00107.png
    ./images/1stpage_00108.png
    ./images/1stpage_00109.png
    ./images/1stpage_00110.png
    ./images/1stpage_00111.png
    ./images/1stpage_00112.png
    ./images/1stpage_00113.png
    ./images/1stpage_00114.png
    ./images/1stpage_00115.png
    ./images/1stpage_00116.png
    ./images/1stpage_00117.png
    ./images/1stpage_00118.png
    ./images/1stpage_00119.png
    ./images/1stpage_00120.png
    ./images/1stpage_00121.png
    ./images/1stpage_00122.png
    ./images/1stpage_00123.png
    ./images/1stpage_00124.png
    ./images/1stpage_00125.png
    ./images/1stpage_00126.png
    ./images/1stpage_00127.png
    ./images/1stpage_00128.png
    ./images/1stpage_00129.png
    ./images/1stpage_00130.png
    ./images/1stpage_00131.png
    ./images/1stpage_00132.png
    ./images/1stpage_00133.png
    ./images/1stpage_00134.png
    ./images/1stpage_00135.png
    ./images/1stpage_00136.png
    ./images/1stpage_00137.png
    ./images/1stpage_00138.png
    ./images/1stpage_00139.png
    ./images/1stpage_00140.png
    ./images/1stpage_00141.png
    ./images/1stpage_00142.png
    ./images/1stpage_00143.png
    ./images/1stpage_00144.png
    ./images/1stpage_00145.png
    ./images/1stpage_00146.png
    ./images/1stpage_00147.png
    ./images/1stpage_00148.png
    ./images/1stpage_00149.png
    ./images/1stpage_00150.png
    ./images/1stpage_00151.png
    ./images/1stpage_00152.png
    ./images/1stpage_00153.png
    ./images/1stpage_00154.png
    ./images/1stpage_00155.png
    ./images/1stpage_00156.png
    ./images/1stpage_00157.png
    ./images/1stpage_00158.png
    ./images/1stpage_00159.png
    ./images/1stpage_00160.png
    ./images/1stpage_00161.png
    ./images/1stpage_00162.png
    ./images/1stpage_00163.png
    ./images/1stpage_00164.png
    ./images/1stpage_00165.png
    ./images/1stpage_00166.png
    ./images/1stpage_00167.png
    ./images/1stpage_00168.png
    ./images/1stpage_00169.png
    ./images/1stpage_00170.png
    ./images/1stpage_00171.png
    ./images/1stpage_00172.png
    ./images/1stpage_00173.png
    ./images/1stpage_00174.png
    ./images/1stpage_00175.png
    ./images/1stpage_00176.png
    ./images/1stpage_00177.png
    ./images/1stpage_00178.png
    ./images/1stpage_00179.png
    ./images/1stpage_00180.png
    ./images/1stpage_00181.png
    ./images/1stpage_00182.png
    ./images/1stpage_00183.png
    ./images/1stpage_00184.png
    ./images/1stpage_00185.png
    ./images/1stpage_00186.png
    ./images/1stpage_00187.png
    ./images/1stpage_00188.png
    ./images/1stpage_00189.png
    ./images/1stpage_00190.png
    ./images/1stpage_00191.png
    ./images/1stpage_00192.png
    ./images/1stpage_00193.png
    ./images/1stpage_00194.png
    ./images/1stpage_00195.png
    ./images/1stpage_00196.png
    ./images/1stpage_00197.png
    ./images/1stpage_00198.png
    ./images/1stpage_00199.png
    ./images/1stpage_00200.png
    ./images/1stpage_00201.png
    ./images/1stpage_00202.png
    ./images/1stpage_00203.png
    ./images/1stpage_00204.png
    ./images/1stpage_00205.png
    ./images/1stpage_00206.png
    ./images/1stpage_00207.png
    ./images/1stpage_00208.png
    ./images/1stpage_00209.png
    ./images/1stpage_00210.png
    ./images/1stpage_00211.png
    ./images/1stpage_00212.png
    ./images/1stpage_00213.png
    ./images/1stpage_00214.png
    ./images/1stpage_00215.png
    ./images/1stpage_00216.png
    ./images/1stpage_00217.png
    ./images/1stpage_00218.png
    ./images/1stpage_00219.png
    ./images/1stpage_00220.png
    ./images/1stpage_00221.png
    ./images/1stpage_00222.png
    ./images/1stpage_00223.png
    ./images/1stpage_00224.png
    ./images/1stpage_00225.png
    ./images/1stpage_00226.png
    ./images/1stpage_00227.png
    ./images/1stpage_00228.png
    ./images/1stpage_00229.png
    ./images/1stpage_00230.png
    ./images/1stpage_00231.png
    ./images/1stpage_00232.png
    ./images/1stpage_00233.png
    ./images/1stpage_00234.png
    ./images/1stpage_00235.png
    ./images/1stpage_00236.png
    ./images/1stpage_00237.png
    ./images/1stpage_00238.png
    ./images/1stpage_00239.png
    ./images/1stpage_00240.png
    ./images/1stpage_00241.png
    ./images/1stpage_00242.png
    ./images/1stpage_00243.png
    ./images/1stpage_00244.png
    ./images/1stpage_00245.png
    ./images/1stpage_00246.png
    ./images/1stpage_00247.png
    ./images/1stpage_00248.png
    ./images/1stpage_00249.png
    ./images/1stpage_00250.png
    ./images/1stpage_00251.png
    ./images/1stpage_00252.png
    ./images/1stpage_00253.png
    ./images/1stpage_00254.png
    ./images/1stpage_00255.png
    ./images/1stpage_00256.png
    ./images/1stpage_00257.png
    ./images/1stpage_00258.png
    ./images/1stpage_00259.png
    ./images/1stpage_00260.png
    ./images/1stpage_00261.png
    ./images/1stpage_00262.png
    ./images/1stpage_00263.png
    ./images/1stpage_00264.png
    ./images/1stpage_00265.png
    ./images/1stpage_00266.png
    ./images/1stpage_00267.png
    ./images/1stpage_00268.png
    ./images/1stpage_00269.png
    ./images/1stpage_00270.png
    ./images/1stpage_00271.png
    ./images/1stpage_00272.png
    ./images/1stpage_00273.png
    ./images/1stpage_00274.png
    ./images/1stpage_00275.png
    ./images/1stpage_00276.png
    ./images/1stpage_00277.png
    ./images/1stpage_00278.png
    ./images/1stpage_00279.png
    ./images/1stpage_00280.png
    ./images/1stpage_00281.png
    ./images/1stpage_00282.png
    ./images/1stpage_00283.png
    ./images/1stpage_00284.png
    ./images/1stpage_00285.png
    ./images/1stpage_00286.png
    ./images/1stpage_00287.png
    ./images/1stpage_00288.png
    ./images/1stpage_00289.png
    ./images/1stpage_00290.png
    ./images/1stpage_00291.png
    ./images/1stpage_00292.png
    ./images/1stpage_00293.png
    ./images/1stpage_00294.png
    ./images/1stpage_00295.png
    ./images/1stpage_00296.png
    ./images/1stpage_00297.png
    ./images/1stpage_00298.png
    ./images/1stpage_00299.png
    ./images/1stpage_00300.png
    ./images/1stpage_00301.png
    ./images/1stpage_00302.png
    ./images/1stpage_00303.png
    ./images/1stpage_00304.png
    ./images/1stpage_00305.png
    ./images/1stpage_00306.png
    ./images/1stpage_00307.png
    ./images/1stpage_00308.png
    ./images/1stpage_00309.png
    ./images/1stpage_00310.png
    ./images/1stpage_00311.png
    ./images/1stpage_00312.png
    ./images/1stpage_00313.png`;
    return data.split("\n")[index];
    }

    const frameCount = 314;
    const images = [];
    const imageSeq = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: 0.5,
        trigger: "#page3",
        start: "top top",
        end: "250% top",
    },
    onUpdate: render,
});

images[0].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
}

ScrollTrigger.create({
    trigger: "#page3",
    pin: true,
    start: "top top",
    end: "250% top",
});
