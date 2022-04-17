import React, {useState} from 'react'; 
import '../styles/Barthel.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import Summary from './Summary';

export default function BarthelIndex(props) {
	var data = props.patient;
	const [summary, showSummary] = useState("false");
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showBarthelIndex, setShowBarthelIndex] = useState(false);
	const [BarthelIndex, setBarthelIndex] = useState(0);
	const [indexList, setList] = useState([]);

	function addToList(val) {
		console.log(val);
		indexList.push(val);
	}

	const questions = [
		{
			questionText: 'Mobility (on level surfaces)',
			answerOptions: [
				{ answerText: '0: immobile including being wheeled by another', index: 0 },
				{ answerText: '1: wheelchair independent, including corners', index: 1 },
				{ answerText: '2: walks with help of one person (verbal or physical) including help up into walking frame or other help standing', index: 2 },
				{ answerText: '3: independent (but may use any aid except rolator; for example, stick or frame) > 50 m / about house', index: 3 },
			],
		},
		{
			questionText: 'Grooming',
			answerOptions: [
				{ answerText: '0: needs help with personal care', index: 0 },
				{ answerText: '1: independent (must be able to do all personal activities E.g. washing hands and face/ combing hair/ cleaning teeth/shaving, implements provided)', index: 1 },
			],
		},
		{
			questionText: 'Dressing',
			answerOptions: [
				{ answerText: '0: dependent (needs help)', index: 0 },
				{ answerText: '1: needs help but can do about half unaided', index: 1 },
				{ answerText: '2: independent (including buttons, zips, laces, etc.)', index: 2 },
			],
		},
		{
			questionText: 'Bathing',
			answerOptions: [
				{ answerText: '0: dependent (needs help)', index: 0 },
				{ answerText: '1: independent (able to wash self all over, may be in shower. A full bath or standing and sponging all over. Includes getting into and out of bath or shower)', index: 1 },
			],
		},
    {
			questionText: 'Stairs',
			answerOptions: [
				{ answerText: '0: Unable (needs lift or cannot negotiate stairs)', index: 0 },
				{ answerText: '1: Needs help (verbal or physical supervision, carrying aid)', index: 1 },
        { answerText: '2: Independent (must carry walking aid if used)', index: 2 },
			],
		},
    {
			questionText: 'Bowels',
			answerOptions: [
				{ answerText: '0: dependent (needs help)', index: 0 },
				{ answerText: '1: Incontinent (or needs to be given suppositories', index: 1 },
        { answerText: '2: continent (If needs enema/supp. Must sit manage himself)', index: 2 }
			],
		},
    {
			questionText: 'Transfers (bed to chair and back)', 
			answerOptions: [
				{ answerText: '0: unable, no sitting balance, needs hoist or complete lift by 2 persons', index: 0 },
				{ answerText: '1: major help (one or two people, physical), can sit', index: 1 },
        { answerText: '2: minor help (verbal or minor physical E.g. Help from spouse)', index: 2 },
				{ answerText: '3: independent (but may use any aid except rolator; for example, stick or frame) > 50 m / about house', index: 3 },
			],
		},
    {
			questionText: 'Bladder',
			answerOptions: [
				{ answerText: '0: immobile including being wheeled by another', index: 0 },
				{ answerText: '1: wheelchair independent, including corners', index: 1 },
        { answerText: '2: walks with help of one person (verbal or physical) including help up into walking frame or other help standing', index: 2 },
				{ answerText: '3: independent (but may use any aid except rolator; for example, stick or frame) > 50 m / about house', index: 3 },
			],
		},
    {
			questionText: 'Feeding',
			answerOptions: [
				{ answerText: '0: unable (needs to be fed)', index: 0 },
				{ answerText: '1: Needs help cutting, spreading butter, but can feed self', index: 1 },
        { answerText: '2: Independent (able to use any neccesary device in a reasonable time, able to cut up food, use condiments, spread butter etc. on his own, food may be placed within reach)', index: 2 },
			],
		},
    {
			questionText: 'Toilet Use',
			answerOptions: [
				{ answerText: '0: dependent (unable to manage without major assistance)', index: 0 },
				{ answerText: '1: Needs some help (able to manage with minor help balancing, handling clothes or toilet paper. Still able to use toilet)', index: 1 },
        { answerText: '2: Independent (can get on and off alone, able to handle clothes, wipe self, flush toilet, empty commode completely unaided)', index: 2 },
			],
		},
	];


	const handleAnswerOptionClick = (index) => {
			addToList(index);
			setBarthelIndex(BarthelIndex + index);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			showSummary("true");
		}
	};

	if (summary === "true"){
        return <Summary patient ={data} history = {"/"} indexList = {indexList}/>
    }

	return (
	<Grid justifyContent={"center"} container>
		<Grid>
			<Card className='body' sx={{ minWidth: 500, maxWidth: 500}}>
				<CardContent>
					{showBarthelIndex ? (
						<div className='score-section'>
							Barthel Index: {BarthelIndex}
						</div>
					) : (
						<>
							<div className='question-section'>
								<div className='question-text'>{questions[currentQuestion].questionText}</div> <br />
							</div>
							<div className='answer-section'>
								{questions[currentQuestion].answerOptions.map((answerOption ) => (
									<button  className='button' onClick={() => handleAnswerOptionClick(answerOption.index)}>{answerOption.answerText}</button> 
								))} 
							</div> 
						</>
					)}
				</CardContent>
			</Card>
		</Grid>
	</Grid>
  );
}