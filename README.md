# ScamOverflow

## Team

[@akaashrp](https://github.com/akaashrp)

[@AnshBhatti](https://github.com/AnshBhatti)

[@neilgoyal](https://github.com/neilgoyal)

[@unnathik](https://github.com/unnathik)

## Inspiration

As college students looking to gain work experience in the field of Computer Science, we engaged in an internship search via online job boards. While these job boards generally provided great suggestions, some of the listings appeared strange: too good and easy to be true. Despite this, they had several applicants, which could very possibly mislead other potential applicants like us to apply. 

Recruitment scams are a national threat, causing nearly $59 million in damages to 16,012 people in 2020 according to FBI's Internet Crime Complaint Center. As the job application season fosters hope for many, we decided to take action to develop a data-driven community space that uses machine learning and the feedback of other active members to support a scam-free job search.

## What it does

ScamOverflow collects data from job postings as reported by users and applies a neural network architecture to report their authenticity. The frontend interface, coupled with a Firebase-powered backend, hosts a forum for the community to share their thoughts, interact with others in the job application phase, supply insightful data for our model to continuously learn from, and tend to user queries for job descriptions by making calls to the API. With it's user-friendly interface and reliable functionality, ScamOverflow is everything one could ask for to pursue a safe job hunt on the internet.

## How we built it

We used an existing dataset on authentic and fraudulent jobs to provide our neural network with a starting point. The model was then compiled and hosted on a Flask-powered API. We developed our frontend interface using ReactJS and hosted user and forum metadata on a Firebase-powered backend.

## Challenges we ran into

Our biggest challenge was making sure we made the most effective use of the initial data we obtained. Owing to a slight skew in the data, we had to generate an architecture to minimize the false positives. Our efforts to address this taught us more about dealing effectively with data by setting up the right training parameters and tuning hyperparameters and NN layers accordingly. Another challenge that we encountered was interacting with the RESTful API through ReactJS, which led us to face many errors we had never run into before.

## Accomplishments that we're proud of

The completion of our model training (which achieved 98% accuracy on a test set), API development, frontend interface, and the seamless integration of all these components are the primary accomplishments we are proud of achieving during HackGT.

## What we learned

We learned how to containerize a model for external deployment to our API and how to utilize a frontend interface to make customs calls to the API. 

## What's next for ScamOverflow

Starting out as a community space and with a pre-trained model, ScamOverflow has a lot of scope to expand. Notably, we want to develop a Chrome extension to seamlessly integrate our functionality while users are browsing jobs in job boards, avoiding the extra time required for the users to query job descriptions into our interface. Additionally, we want to expand our community space to help further grow our dataset and make sure our model evolves with it. 
