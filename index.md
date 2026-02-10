---
layout: default
---

## About Me
<table style="border: none; background: transparent; width: 100%;">
  <tr>
    <td style="width: 70%; vertical-align: middle; border: none; padding-right: 20px;">
      <div class="profile-doc">
		M.Sc @ University of Minnesota <br>
        Robotics<br>
		<br> 
		<a href="mailto:narkh009@umn.edu">
			<i class="fa fa-envelope" aria-hidden="true"></i> narkh009@umn.edu</a> <br>
		<a href="https://github.com/ronsys11">
			<i class="fa fa-github" aria-hidden="true"></i> Github </a> <br>
		<a href="https://www.linkedin.com/in/ronak-narkhede/">
			<i class="fa fa-linkedin" aria-hidden="true"></i> LinkedIn </a> <br>
			<br>
			<br>
	  </div>
      <div style="text-align: left;">
        Hello! I am Ronak, a graduate student at the <b>Medical Robotics and Devices Lab</b> working with <a href="https://cse.umn.edu/me/tim-kowalewski">Professor Timothy Kowaleski</a>. My current research focuses on <b>making stroke thrombectomy accessible</b> through telerobotic surgical systems. I am drawn to hardware because tools are how humans built civilizations, and I believe robots are the next iteration. They'll help us build at scale and eventually climb the Kardashev scale. I want to be part of that story (and also generate shareholder value along the way:)).
        <br><br>
        Try out the <a href="https://alpha.stroke-robot.org/">live telerobotic demo here</a>.
        <br><br>
        When I am not working on my robotic arms, you'll find me watching sports, cooking exotic cuisines, and hosting friends who are brave enough to try them.
      </div>
    </td>
    <td style="width: 30%; vertical-align: middle; border: none; text-align: center;">
      <img class="profile-picture" src="me.jpeg" style="width: 100%; height: auto; border-radius: 10%; margin-top: 15px;">
    </td>
  </tr>
</table>




---
## Experience
{% assign years = site.data.experience | group_by:"year" | sort: "name" | reverse %}

{% for year in years %}
### {{ year.name }}	
---

{% for jobs in year.items %}
<table class="paper-list" style="margin-top: 15px;">
  <tr>
  	{% if jobs.logo %}
    <td style="width: 200px; min-width: 200px; text-align: center; vertical-align: middle;">
        <img class="paper-logo" src="{{jobs.logo}}" style="width: auto; max-width: 100%; max-height: 120px;">
    </td>
	{% endif %}
	{% if paper.paper-logo-mp4 %}
    <td>
		<div class="paper-logo">
		<video width="80%" height="80%" muted autoplay loop>
			<source src="{{paper.paper-logo-mp4}}" type="video/mp4">
			Your browser does not support the video tag.
		</video>
		</div>
	</td>
	{% endif %}
    <td>
		<p class="paper-title">{{jobs.title}}</p>  
		<p class="paper-authors">
			{{jobs.description}}
		</p>
		<p class="paper-pub">{{paper.paper-pub}}</p>
		<p class="paper-links">
			{% if paper.link-pdf %}
			<a href="{{paper.link-pdf}}" target="_blank" rel="noopener">
				<i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF </a>
			{% endif %}

		</p>
	</td>
  </tr>
</table>
{% endfor %}
{% endfor %}


## Publications
{% assign years = site.data.papers | group_by:"year" | sort: "name" | reverse %}

{% for year in years %}
### {{ year.name }}	
---

{% for paper in year.items %}
<table class="paper-list">
  <tr>
  	{% if paper.paper-logo %}
    <td><img class="paper-logo publication-gif" src="{{paper.paper-logo}}"></td>
	{% endif %}
	{% if paper.paper-logo-mp4 %}
    <td>
		<div class="paper-logo">
		<video width="80%" height="80%" muted autoplay loop>
			<source src="{{paper.paper-logo-mp4}}" type="video/mp4">
			Your browser does not support the video tag.
		</video>
		</div>
	</td>
	{% endif %}
    <td>
		<p class="paper-title">{{paper.paper-title}}</p>  
		<p class="paper-authors">
			{% for author in paper.paper-authors %}
				{% if forloop.last == true %}
					{{author.name}}.
				{% else %}
					{{author.name}},
				{% endif %}
			{% endfor %}
		</p>
		<p class="paper-pub">{{paper.paper-pub}}</p>
		<p class="paper-links">
			{% if paper.link-pdf %}
			<a href="{{paper.link-pdf}}" target="_blank" rel="noopener">
				<i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF </a>
			{% endif %}

		</p>
	</td>
  </tr>
</table>
{% endfor %}
{% endfor %}

---
<!-- ## Projects

<tr>
    <td><div>
	    <a href="https://github.com/aman190202/neural_fields_bvc">
            <i class="fa fa-github" aria-hidden="true"></i> Neural Fields with encoding:</a> A comparision of different encoding methods for 2D inputs
            <br> 
            <br> 
        <a href="https://github.com/aman190202/LovingVincentt">
			<i class="fa fa-github" aria-hidden="true"></i> Loving Vincet:</a> Convert your videos into moving paintings of your choice
            <br> 
            <br> 
        <a href="https://github.com/aman190202/ray_tracing_weekend">
			<i class="fa fa-github" aria-hidden="true"></i>  Ray Tracer on MLX:</a> Implementing an entire Ray Tracer built from scratch in NumPy and modifying it to run on <a href="https://ml-explore.github.io/mlx/build/html/index.html">MLX</a>,a NumPy-like array framework designed for efficient and flexible machine learning on Apple silicon. [Ongoing]
            <br>
			<br> 
        <a href="https://devpost.com/software/rescue-shark">
			<i class="fa fa-github" aria-hidden="true"></i>  Rescue Shark:</a> Built a SOS application for Truck Drivers - Won a MLH Hackathon for "Most Creative Use of Twilio"
            <br>
			<br> 
	</div></td>
</tr> -->

<style>
    body {
        background-color: #ffffff !important; /* Set background to white */
        color: #000000; /* Change text color to black for visibility */
        font-family: 'Garamond', serif;
    }
    h1, h2, h3, h4, h5, h6 {
        color: #000000; /* Ensure all headings are visible on white background */
    }
    .page-title {
        color: orange; /* Set your title color to orange */
    }
    .header-name {
        color: orange; /* Set your name color to orange */
    }
    .link-box {
        position: relative;
        display: inline-block;
        padding: 10px;
        border: 2px solid #000000;
        border-radius: 8px;
        transition: transform 0.3s;
        width: 100%;
        box-sizing: border-box;
    }
    .link-box:hover {
        transform: scale(1.05); /* Pop-up effect */
    }
    .link-box h3 {
        min-height: 3.5rem;
        margin-top: 10px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.2;
    }
    a {
        color: #4da6ff; /* Default link color (light blue) */
        text-decoration: none; /* Remove underline */
    }
    a:hover {
        color: orange; /* Change link color to orange on hover */
        text-decoration: underline; /* Optional: add underline on hover */
    }
    .project-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    .project-item {
        text-align: center;
        margin-bottom: 20px;
    }
    .project-image {
        width: auto;
        border-radius: 10px;
        height: 200px;
        max-width: 100%;
        object-fit: contain;
    }
    
    /* Dynamic background for experience section */
    @keyframes gradientAnimation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    /* Experience section styling */
    .paper-list {
        background: linear-gradient(270deg, #f5f5f5, #e5e5e5, #f5f5f5);
        background-size: 400% 400%;
        animation: gradientAnimation 15s ease infinite; /* Apply animation */
        color: #000000; /* Text color */
        border-radius: 8px;
        padding: 10px;
        margin-bottom: 15px;
        transition: transform 0.3s;
        border: 1px solid #cccccc;
    }
    .paper-list:hover {
        transform: scale(1.02);
    }
    .paper-title {
        color: #000000 !important;
        font-weight: bold;
    }
    .paper-authors, .paper-pub, .paper-links {
        color: #333333 !important;
    }
    .paper-logo {
        background-color: transparent !important;
    }
    
    .publication-gif {
        width: 200px;
        height: 120px;
        object-fit: contain;
        background-color: #000;
        border-radius: 8px;
    }
    
    /* Fix for any tables in the document */
    table {
        background-color: #ffffff !important;
        color: #000000 !important;
        border-collapse: collapse;
    }
    td, th {
        color: #000000 !important;
        padding: 8px;
        background-color: #ffffff !important;
    }
    
    /* Profile section */
    .profile-doc, .profile-picture {
        color: #000000 !important;
    }
    
    /* Resume section styling */
    .resume-section, .resume-section * {
        color: #000000 !important; /* Ensure all text in the resume section is black */
    }
    
    section, div, article {
        background-color: #ffffff !important;
    }
</style>



## Projects




<div class="project-container">
    <!-- Project 1: UR5 Flashlight Assembly -->
    <div class="project-item">
        <div class="link-box">
            <a href="https://drive.google.com/drive/u/0/folders/1ctY7z71yzgrHjeew_uOCG2yhOH7aU4XC" style="text-decoration: none; color: inherit;">
                <img src="assets/projects/proj_ur5.gif" alt="UR5 Flashlight Assembly" class="project-image">
                <h3>UR5 Flashlight Assembly</h3>
            </a>
        </div>
        <p>Using RoboDK and Python API to write a flashlight assembly program.</p>
    </div>

    <!-- Project 2: Teleoperated Robot Arm -->
    <div class="project-item">
        <div class="link-box">
            <a href="https://drive.google.com/file/d/11_A4dyopk6ykT5S--rciaXSho9IaOo9-/view?usp=drive_link" style="text-decoration: none; color: inherit;">
                <img src="assets/projects/proj_teleop.gif" alt="Teleoperated Robot Arm" class="project-image">
                <h3>(Ongoing) Teleoperated 6 DOF Robot Arm</h3>
            </a>
        </div>
        <p>The problems you face when simulating robots versus working with actual hardware are very different, which is why I decided to build my own robot arm setup at home. I plan to learn Rust by writing its control system in it.</p>
    </div>
    
    <!-- Project 3: Transformer Policy for Aloha Robot -->
    <div class="project-item">
        <div class="link-box">
            <a href="https://drive.google.com/drive/u/0/folders/15IMl670nH-7Ln1oAfM3LpgCL-k2uVWAq" style="text-decoration: none; color: inherit;">
                <img src="assets/projects/proj_aloha.gif" alt="Transformer Policy for Aloha Robot" class="project-image">
                <h3>Transformer Policy for Aloha Robot</h3>
            </a>
        </div>
        <p>A transformer based policy using PyTorch for bi-manual robotic manipulation tasks, enabling robots to perform complex actions such as cube transfer and insertion in simulated and real-world environments.</p>
    </div>
    
    <!-- Project 4: Sir Hovers-a-Lot (Drone) -->
    <div class="project-item">
        <div class="link-box">
            <a href="https://drive.google.com/drive/folders/1iw5D4wbwfcecyPsg6_81mdaVSpeTGBU_" style="text-decoration: none; color: inherit;">
                <img src="assets/projects/proj_drone.jpeg" alt="Autonomous Drone" class="project-image">
                <h3>Sir Hovers-a-Lot (Drone)</h3>
            </a>
        </div>
        <p>Developed a quadcopter drone equipped with autonomy and mapping capabilities. Integrated SLAM using Hector SLAM for 2D mapping and ORB-SLAM3 for 3D visual-inertial navigation. Implemented behavioral cloning.</p>
    </div>
    
    <!-- Project 5: Vision based Robot Control -->
    <div class="project-item">
        <div class="link-box">
            <a href="https://drive.google.com/drive/folders/1F3ncokIQqA96nlAp_7txGGaQY-cq6g5M" style="text-decoration: none; color: inherit;">
                <img src="assets/projects/proj_vision_based_robot_control.gif" alt="Vision based Robot Control" class="project-image">
                <h3>Vision based Robot Control</h3>
            </a>
        </div>
        <p>Developed a novel Human-Machine Interface to simplify programming robotic manipulators. Utilized a wireless pointer and a stereo camera for intuitive point selection and task simulation. Integrated ROS, ArUco markers, and visual feedback.</p>
    </div>
    
    <!-- Project 6: 6 DOF EM Motion Tracker -->
    <div class="project-item">
        <div class="link-box">
            <a href="https://drive.google.com/file/d/1KZv5142z8e9m32j-nkVnDMWSq6dzEXOI/view?usp=drive_link" style="text-decoration: none; color: inherit;">
                <img src="assets/projects/proj_tracker.png" alt="EM Motion Tracker" class="project-image">
                <h3>(Ongoing) 6 DOF EM Motion Tracker</h3>
            </a>
        </div>
        <p>Built real time motion tracking system using EM sensor for 6 DOF pose estimation in surgical navigation application. Developed sensor data processing pipeline with Kalman filtering for position tracking at 120 Hz update rate.</p>
    </div>
    
    <!-- Project 7: ArUco Cube Pose Estimation -->
    <div class="project-item">
        <div class="link-box">
            <a href="https://drive.google.com/drive/folders/1jvETnl3htr7RRM5neljxJIG9WsdGSKbh" style="text-decoration: none; color: inherit;">
                <img src="assets/projects/proj_aruco.png" alt="ArUco Cube Pose Estimation" class="project-image">
                <h3>ArUco Cube Pose Estimation</h3>
            </a>
        </div>
        <p>Real-time ArUco marker detection using OpenCV. Pose estimation for a cube with ArUco markers. Visualizing the detected cube in RViz with the help of RViz markers.</p>
    </div>
    
    <!-- Project 8: TD3 Door Opening Agent -->
    <div class="project-item">
        <div class="link-box">
            <a href="https://drive.google.com/drive/folders/1wWLABdD6L2ZanNf9owkOiDKWn6KCdfWc" style="text-decoration: none; color: inherit;">
                <img src="assets/projects/proj_td3.png" alt="TD3 Door Opening Agent" class="project-image">
                <h3>TD3 Based Door Opening Agent</h3>
            </a>
        </div>
        <p>A PyTorch implementation of TD3 applied to opening a door controlling a Panda robot in Robosuite environments.</p>
    </div>
</div>


---
## Invited talks

Date | Event | Details
-----|-------|--------
April 30, 2025 | Design of Medical Devices Conference | Talk revieiwng the Corpath GRX and Magellan robot for stroke intervention. [Link](https://dmd.umn.edu/2025/robotics)


---
<br>
 Template Credits : <a href="https://maturk.github.io">Matias Turkulainen</a>
