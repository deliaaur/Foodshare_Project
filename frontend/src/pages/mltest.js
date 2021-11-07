import ml5 from 'ml5';
import { useEffect } from 'react';
import Navbar from '../components/navbar';

//Function that sorts an array of json objects by a given key
function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function Mltest() {

    const image = document.getElementById('image'); // The image we want to classify
    const result = document.getElementById('result'); // The result tag in the HTML
    const probability = document.getElementById('probability'); // The probability tag in the HTML

    useEffect(() => {
        // Initialize the Image Classifier method with MobileNet
        ml5.imageClassifier('MobileNet')
            .then(classifier => classifier.classify(image))
            .then(results => {
                //sortByKey(results, 'label');    
                result.innerText = results[0].label;
                probability.innerText = results[0].confidence.toFixed(4);
                console.log(results);
            });
    }, []);
    return (
        <div className='mltest'>
            <Navbar/>
            <h1>Image classification using MobileNet</h1>
            <p>The MobileNet model labeled this as <span id="result">...</span> with a confidence of <span id="probability">...</span>.</p>
            <img crossorigin='anonymous' src={"data:image/jpeg;base64,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"} id="image" width="400" />
            <script src="sketch.js"></script>
        </div>
    )
}

export default Mltest;