# TWFDA to MFP Converter

Script to convert nutrition info on TWFDA website to MyFitnessPal format to create new food on the app more easily.

### How to Use
1. Create Bookmark with url `javascript:(function(){var script=document.createElement('SCRIPT');script.src='https://fung-hei-man.github.io/twfda-mfp-conversion-script/converter.js';document.body.appendChild(script);})()`

2. Search food on [TWFDA Webpage](https://consumer.fda.gov.tw/Food/TFND.aspx?nodeID=178) and click the desired item

3. Click the saved bookmark to run the script. Calculation result is displayed as alert.
<img width="468" alt="image" src="https://user-images.githubusercontent.com/94099670/225285639-ab166bd0-761b-4138-a9c8-062594a70c94.png">

4. Click "Create a food" on MyFitnessPal and input the nutrition info

### Customisation
Some nutritions are shown as percentage on MyFitnessPal. The calculation can be changed in `nutritions` object according to your age and gender.  
Recommanded daily intake can be found [here](https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4248&pid=12285).
