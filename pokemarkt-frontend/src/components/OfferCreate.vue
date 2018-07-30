<template>
    <div>
        <form id="regForm" action="/action_page.php">
            <h1>Register:</h1>
            <!-- One "tab" for each step in the form: -->
            <div class="tab">Name:
                <p><input placeholder="First name..." name="fname"></p>
                <p><input placeholder="Last name..." name="lname"></p>
            </div>
            <div class="tab">Contact Info:
                <p><input placeholder="E-mail..." name="email"></p>
                <p><input placeholder="Phone..." name="phone"></p>
            </div>
            <div class="tab">Birthday:
                <p><input placeholder="dd" name="dd"></p>
                <p><input placeholder="mm" name="nn"></p>
                <p><input placeholder="yyyy" name="yyyy"></p>
            </div>
            <div class="tab">Login Info:
                <p><input placeholder="Username..." name="uname"></p>
                <p><input placeholder="Password..." name="pword" type="password"></p>
            </div>
            <div style="overflow:auto;">
                <div style="float:right;">
                    <button type="button" id="prevBtn" v-on:click="nextPrev(-1)">Previous</button>
                    <button type="button" id="nextBtn" v-on:click="nextPrev(1)">Next</button>
                </div>
            </div>
            <!-- Circles which indicates the steps of the form: -->
            <div style="text-align:center;margin-top:40px;">
                <span class="step"></span>
                <span class="step"></span>
                <span class="step"></span>
                <span class="step"></span>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentTab:0
        }
    },
    methods:{

        showTab(n) {
            
            alert("showTab" + n)
            // This function will display the specified tab of the form...
            var x = document.getElementsByClassName("tab");
            x[n].style.display = "block";
            //... and fix the Previous/Next buttons:
            if (n == 0) {
                document.getElementById("prevBtn").style.display = "none";
            } else {
                document.getElementById("prevBtn").style.display = "inline";
            }
            if (n == (x.length - 1)) {
                document.getElementById("nextBtn").innerHTML = "Submit";
            } else {
                document.getElementById("nextBtn").innerHTML = "Next";
            }
            //... and run a function that will display the correct step indicator:
            fixStepIndicator(n)
        },
        nextPrev(n) {
            alert("nextPrev" + n)
            // This function will figure out which tab to display
            var x = document.getElementsByClassName("tab");
            // Exit the function if any field in the current tab is invalid:
            
            /*if (n == 1 && !validateForm()) return false;*/
            
            // Hide the current tab:
            x[this.currentTab].style.display = "none";
            alert("hide")
            // Increase or decrease the current tab by 1:
            this.currentTab = this.currentTab + n;
            alert("current tab: " + this.currentTab)
            // if you have reached the end of the form...
            if (this.currentTab >= x.length) {
                // ... the form gets submitted:
                document.getElementById("regForm").submit();
                return false;
            }
            
            // Otherwise, display the correct tab:
            showTab(this.currentTab);
        },
        validateForm(){
            alert("validateForm")
            return true;
        },
        fixStepIndicator(n) {
            alert("fixStepIndicator" + n)
            // This function removes the "active" class of all steps...
            var i, x = document.getElementsByClassName("step");
            for (i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace(" active", "");
            }
            //... and adds the "active" class on the current step:
            x[n].className += " active";
        }
    }
}
</script>

<style>
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;  
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}
.step.active {
  opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #4CAF50;
}
#regForm {
  background-color: #ffffff;
  margin: 100px auto;
  font-family: Raleway;
  padding: 40px;
  width: 70%;
  min-width: 300px;
}
.tab {
  display: none;
}
</style>
