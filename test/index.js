const App = () => {
    const [excalidrawAPI, setExcalidrawAPI] = React.useState(null);
    var options =  {
        initialData: {
            elements:  [
                {
                    "id": "qb6Z2IvE38hOhZdogOmk6",
                    "type": "rectangle",
                    "x": -384.732177734375,
                    "y": -274.7665710449219,
                    "width": 761.16650390625,
                    "height": 546.8637390136719,
                    "angle": 0,
                    "strokeColor": "#000000",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": {
                        "type": 3
                    },
                    "seed": 649303368,
                    "version": 183,
                    "versionNonce": 1912477000,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1673364106899,
                    "link": null,
                    "locked": false
                },
                {
                    "id": "0uMptKU6",
                    "type": "text",
                    "x": -352.7803955078125,
                    "y": -247.10736083984375,
                    "width": 61,
                    "height": 25,
                    "angle": 0,
                    "strokeColor": "#000000",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 1500638792,
                    "version": 11,
                    "versionNonce": 463840312,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1673364092725,
                    "link": null,
                    "locked": false,
                    "text": "Region",
                    "rawText": "Region",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 18,
                    "containerId": null,
                    "originalText": "Region"
                },
                {
                    "id": "CgOVH7Vy0qWBYzVpHv66B",
                    "type": "rectangle",
                    "x": -358.01190185546875,
                    "y": -151.9652099609375,
                    "width": 700.8378295898438,
                    "height": 311.60504150390625,
                    "angle": 0,
                    "strokeColor": "#000000",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": {
                        "type": 3
                    },
                    "seed": 1754668600,
                    "version": 219,
                    "versionNonce": 1251669832,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1673364123610,
                    "link": null,
                    "locked": false
                },
                {
                    "id": "t1qKaGRm",
                    "type": "text",
                    "x": -324.38616943359375,
                    "y": -139.32958984375,
                    "width": 38,
                    "height": 25,
                    "angle": 0,
                    "strokeColor": "#000000",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 1771057208,
                    "version": 28,
                    "versionNonce": 2049507640,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1673364123610,
                    "link": null,
                    "locked": false,
                    "text": "VPC",
                    "rawText": "VPC",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 18,
                    "containerId": null,
                    "originalText": "VPC"
                },
                {
                    "id": "CLe06YxXc0xAkgZ11bYFw",
                    "type": "rectangle",
                    "x": -218.01953125,
                    "y": -107.16143798828125,
                    "width": 163.8958740234375,
                    "height": 196.6712646484375,
                    "angle": 0,
                    "strokeColor": "#000000",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": {
                        "type": 3
                    },
                    "seed": 842955576,
                    "version": 73,
                    "versionNonce": 1506594376,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1673364123610,
                    "link": null,
                    "locked": false
                },
                {
                    "id": "K7NsluFb",
                    "type": "text",
                    "x": -171.815673828125,
                    "y": -50.93634033203125,
                    "width": 79,
                    "height": 50,
                    "angle": 0,
                    "strokeColor": "#000000",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 1465592392,
                    "version": 173,
                    "versionNonce": 283384376,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1673364123610,
                    "link": null,
                    "locked": false,
                    "text": "private \nsubnet",
                    "rawText": "private \nsubnet",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 43,
                    "containerId": null,
                    "originalText": "private \nsubnet"
                },
                {
                    "type": "rectangle",
                    "version": 73,
                    "versionNonce": 1923859784,
                    "isDeleted": false,
                    "id": "kk8Mj2dL32mJlErr3IBCP",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "angle": 0,
                    "x": 58.05206298828125,
                    "y": -115.18499755859375,
                    "strokeColor": "#000000",
                    "backgroundColor": "transparent",
                    "width": 163.8958740234375,
                    "height": 196.6712646484375,
                    "seed": 681959480,
                    "groupIds": [],
                    "roundness": {
                        "type": 3
                    },
                    "boundElements": null,
                    "updated": 1673364123610,
                    "link": null,
                    "locked": false
                },
                {
                    "id": "STK6brpa",
                    "type": "text",
                    "x": 111.071533203125,
                    "y": -50.603240966796875,
                    "width": 65,
                    "height": 50,
                    "angle": 0,
                    "strokeColor": "#000000",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 1098266184,
                    "version": 73,
                    "versionNonce": 852759352,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1673364123610,
                    "link": null,
                    "locked": false,
                    "text": "public \nsubnet",
                    "rawText": "public \nsubnet",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 43,
                    "containerId": null,
                    "originalText": "public \nsubnet"
                },
                {
                    "id": "42OhSaKtPZ6wvVsOqFH1f",
                    "type": "rectangle",
                    "x": -256.72833251953125,
                    "y": -220.647705078125,
                    "width": 528.142578125,
                    "height": 447.126220703125,
                    "angle": 0,
                    "strokeColor": "#000000",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "dashed",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": {
                        "type": 3
                    },
                    "seed": 1717365816,
                    "version": 117,
                    "versionNonce": 76573000,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1673364141301,
                    "link": null,
                    "locked": false
                },
                {
                    "id": "NOeA4klM",
                    "type": "text",
                    "x": -231.77642822265625,
                    "y": -204.87750244140625,
                    "width": 161,
                    "height": 25,
                    "angle": 0,
                    "strokeColor": "#000000",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "dashed",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 1064089416,
                    "version": 51,
                    "versionNonce": 1361886520,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1673364160697,
                    "link": null,
                    "locked": false,
                    "text": "AZ in the region",
                    "rawText": "AZ in the region",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 18,
                    "containerId": null,
                    "originalText": "AZ in the region"
                },
                {
                    "id": "KelOUXkaVAkWCERu-1pfA",
                    "type": "rectangle",
                    "x": -247.05999755859375,
                    "y": -241.31768798828125,
                    "width": 355.73260498046875,
                    "height": 35.6761474609375,
                    "angle": 0,
                    "strokeColor": "#000000",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": {
                        "type": 3
                    },
                    "seed": 600602936,
                    "version": 134,
                    "versionNonce": 1261640,
                    "isDeleted": true,
                    "boundElements": null,
                    "updated": 1673364092725,
                    "link": null,
                    "locked": false
                }
            ],
            appState: {
                viewModeEnabled: true,

                viewBackgroundColor: "#a5d8ff"
            },
        },
        excalidrawAPI: (api)=> setExcalidrawAPI(api)
    };


    React.useEffect(() => {
        if (!excalidrawAPI) {
            return;
        }
        const elm = excalidrawAPI.getSceneElements();
        excalidrawAPI.scrollToContent(elm, {
            fitToContent: true,
            animate: true
        })
        // to open the library sidebar
        // excalidrawAPI?.resetScene()
    }, [excalidrawAPI]);
    // setTimeout(() => {
    //     console.log('?????????')
    //     console.log(excalidrawAPI?.resetScene())
    // }, 10000)
    // var i = 0
    // /// testtinggg yuuu
    // for (const p of document.querySelectorAll("p")) {
    //     i++;
    //     if (p.textContent.search(/!\[\[(.+)excalidraw(.+)\]\]/) !== -1) {
    //         console.log(p.textContent)
    //
    //         var newExcalidrawBlock = document.createElement("div");
    //         newExcalidrawBlock.setAttribute("id", `excalidraw-${i}`);
    //         newExcalidrawBlock.innerHTML = "";
    //         p.parentNode.replaceChild(newExcalidrawBlock, p);
    //     }
    // }

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "div",
            {
                style: { height: "500px" },
            },
            React.createElement(ExcalidrawLib.Excalidraw, options),
        ),
    );
};

const excalidrawWrapper = document.getElementById("app");
const root = ReactDOM.createRoot(excalidrawWrapper);
root.render(React.createElement(App));
