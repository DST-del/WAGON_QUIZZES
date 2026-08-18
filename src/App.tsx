import './App.css'
import { useState } from 'react'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import { easyAtomicStructure_questions } from './questions/chemistry/grade10/atomstructure/atomstructure'
import { easyacidsandbases_Questions } from './questions/chemistry/grade10/acids&bases/acids&bases'
import { easyChemEquations_questions } from './questions/chemistry/grade10/chemEquations/chemEquations'
import { nomenclature } from './questions/chemistry/grade10/nomenclature/nomenclature'
import { mediumchemReactions } from './questions/chemistry/grade11/chemReactions/chemReactions'
import { mediumGasLaws } from './questions/chemistry/grade11/gasLaws/gasLaws'
import { mediumOrganicChem } from './questions/chemistry/grade11/organicChemistry/organicChemistry'
import { mediumphysicalpropofmatter } from './questions/chemistry/grade11/physicalpropertiesofmatter/physicalpropertiesofmatter'
import { mediumSolutions } from './questions/chemistry/grade11/solutions/solutions'
import { hardacids_and_bases } from './questions/chemistry/grade12/acids&bases/acids&bases'
import { hardaqueousReactions } from './questions/chemistry/grade12/aqueousReactions/aqueousReactions'
import { hardatomicStructure } from './questions/chemistry/grade12/atomicStructure/atomicStructure'
import { electrochemistry } from './questions/chemistry/grade12/electrochemistry/electrochemistry'
import { equilibrium } from './questions/chemistry/grade12/equilibrium/equilibrium'
import { kinetics } from './questions/chemistry/grade12/kinetics/kinetics'

import { easykinematics } from './questions/physics/grade10/kinematics/kinematics'
import { easy_forces_and_energy } from './questions/physics/grade10/forces&energy/forces&energy'
import { mediumdynamics } from './questions/physics/grade11/dynamics/dynamics'
import { medium_electric_fields } from './questions/physics/grade11/fields/electric_fields'
import { medium_gravitational_fields } from './questions/physics/grade11/fields/gravitational_fields'
import { medium_mag_fields } from './questions/physics/grade11/fields/magnetic_fields'
import { medium_kinematics } from './questions/physics/grade11/kinematics/kinematics'
import { medium_1Dwaves } from './questions/physics/grade11/waves1D/waves1D'
import { medium_2Dwaves } from './questions/physics/grade11/waves2D/waves2D'
import { circular_motion } from './questions/physics/grade12/circular_motion/circular_motion'
import { hard_dynamics } from './questions/physics/grade12/dynamics/dynamics'
import { electric_circuits } from './questions/physics/grade12/electric_circuits/electric_circuits'
import { hard_electric_fields } from './questions/physics/grade12/electric_fields/electric_fields'
import { electromagnetic_induction } from './questions/physics/grade12/electromagnetic_induction/electromagnetic_induction'
import { hard_gravitational_fields } from './questions/physics/grade12/gravitational_fields/gravitational_fields'
import { hard_kinematics } from './questions/physics/grade12/kinematics/kinematics'
import { momentum_work_energy } from './questions/physics/grade12/momentum_work_energy/momentum_work_energy'
import { projectile_motion } from './questions/physics/grade12/projectile_motion/projectile_motion'

import { ecology } from './questions/biology/grade10/ecology/ecology'
import { digestion_nutrition } from './questions/biology/grade11/digestion_nutrition/digestion_nutrition'
import { transportation_respiration } from './questions/biology/grade11/transportation_respiration/transportation_respiration'
import { wellness_homeostaticchanges } from './questions/biology/grade11/wellness_homeostaticchanges/wellness_homeostaticchanges'
import { wellness_homeostasis } from './questions/biology/grade11/wellness_homeostasis/wellness_homeostasis'
import { excretion_wastemanagement } from './questions/biology/grade11/excretion_wastemanagement/excretion_wastemanagement'
import { protection_control } from './questions/biology/grade11/protection_control/protection_control'
import { biodiversity_conservation } from './questions/biology/grade12/biodiversity_conservation/biodiversity_conservation'
import { biodiversity_organization } from './questions/biology/grade12/biodiversity_organization/biodiversity_organization'
import { biological_inheritance } from './questions/biology/grade12/biological_inheritance/biological_inheritance'
import { evolution_biodiversity } from './questions/biology/grade12/evolution_biodiversity/evolution_biodiversity'
import { inheritance_mechanisms } from './questions/biology/grade12/inheritance_mechanisms/inheritance_mechanisms'

function StartButton ( { onStart }: {onStart: () => void}) {

  return (
    <div className='container1'>
      <button 
      className="start"
      onClick={onStart}
      >        
        START QUIZ
      </button>
    </div>      
  )
}

type Question = {
  question: string;
  choices: string[];
  correct: string;
}


function ChemButton( {onSelect}: {onSelect: () => void}) {
  return (
    <button 
    className="chem"
    onClick = {onSelect}
    >
    CHEMISTRY
    </button>
  )
}

function BioButton({onSelect}: {onSelect: () => void}) {
  return (
    <button 
    className="bio"
    onClick = {onSelect}
    >
      BIOLOGY
    </button>
  )
}

function PhysButton({onSelect}: {onSelect: () => void}) {
  return (
    <button 
    className="physics"
    onClick = {onSelect}
    >
      PHYSICS
    </button>
  )
}

function SubjectSelection() {
  return (
    <div>
      <h1 className='p2'>
        SELECT SUBJECT
      </h1>
      
    </div>
  )
}

function GradeSelection() {
  return (
    <div>
      <h1 className='p3'>
        CHOOSE A GRADE
      </h1>
    </div>
  )
}

function G10Button ({ onGrade }: {onGrade: () => void}) {
  return (
    <button 
      className='G10'
      onClick={onGrade}
    >
      Grade 10
    </button>
  )
}

function G11Button ({ onGrade }: {onGrade: () => void}) {
  return (
    <button 
      className='G11'
      onClick={onGrade}
    >
      Grade 11
    </button>
  )
}

function G12Button ({ onGrade }: {onGrade: () => void}) {
  return (
    <button 
      className='G12'
      onClick={onGrade}
    >
      Grade 12
    </button>
  )
}

function ChoiceButton({ onAnswer, choice}: {choice: string; onAnswer: () => void}) {
  return (
    <button
      onClick={onAnswer}
      className='choices'
    >
      {choice}
    </button>
  )
}

export default function App () {
  const [page, setPage] = useState("home");
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("")
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [questionSet, setQuestionSet] = useState<Question[]>(easyAtomicStructure_questions)
  const currentQuestion = questionSet[questionIndex]
  const [IncorrectQuestion, setIncorrectQuestion] = useState<Question[]>([])

  function randomQuiz(questionSet:Question[]) {
    const shuffleQuestionSet = [...questionSet].sort(
      () => Math.random() - 0.5
    )
    setQuestionSet(shuffleQuestionSet.slice(0, 12))
    setScore(0)
    setQuestionIndex(0)
    setIncorrectQuestion([])

}
  
  const BackHandle = () => {
    if (page === "subjects") {
      setPage("home")
      setSubject("")
    }
    else if (page === "difficulty") {
      setPage("subjects")
      setDifficulty("")
    }

    else if (page === "Topic") {
      setPage("difficulty")
    }

    else if (page === "Quiz") {
      setPage("Topic")
      setScore(0)
      setQuestionIndex(0)
    }
  }

  function checkAnswer(choice: string) {
    if (choice === currentQuestion.correct) {
      setScore(previousScore => previousScore + 1)
    }

     if (choice !== currentQuestion.correct) {
      setIncorrectQuestion((prevQuestion) => [...prevQuestion, currentQuestion])
    }

    if (questionIndex < questionSet.length - 1) {
      setQuestionIndex(previousquestionIndex => previousquestionIndex + 1)
    } else {
        setPage("Score")
      }
  }

  return (
    <div>

      {page === "home" && (
        <>
          <h1 className="p">
            WAGON QUIZZES
          </h1>
            <StartButton onStart={() => {
              setPage("subjects")
              
              }}/>
        </>
      )} 

      {page === "subjects" && (
        <div className='selections'>
          <SubjectSelection/>
          <ChemButton onSelect = {() => { 
            setSubject("CHEMISTRY") 
            setPage("difficulty")
            }}/>
          <PhysButton onSelect = {() => {
            setSubject("PHYSICS")
            setPage("difficulty")
            }}/>
          <BioButton onSelect = {() => {
            setSubject("BIOLOGY")
            setPage("difficulty")
            }}/>

          <button 
          className='back'
          onClick={BackHandle}
          >
          BACK
          </button>
        </div>         
      )}

      {page === "difficulty" && (
        <div className='diffselection'>
          <GradeSelection/>
          <G10Button onGrade={() => {
            setDifficulty("G10")
            setPage("Topic")
          }}/>
          <G11Button onGrade={() => {
            setDifficulty("G11")
            setPage("Topic")
          }}/>
          <G12Button onGrade={() => {
            setDifficulty("G12")
            setPage("Topic")
          }}/>
          <button 
          className='back'
          onClick={BackHandle}
          >
          BACK
          </button>
        </div>
      )}

      {page === "Topic" && (
        <div>
          {subject === "CHEMISTRY" && difficulty === "G10" && (
            <div className='container3'>
              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(easyAtomicStructure_questions)
              } }
              >                  
                ATOMIC STRUCTURE
              </button>

              <button 
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(easyacidsandbases_Questions)
              }}
              >
                ACIDS AND BASES
              </button>

              <button 
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(easyChemEquations_questions)
              }}
              >
                CHEMICAL EQUATIONS
              </button>

              <button 
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(nomenclature)
              }}
              >
                NOMENCLATURE
              </button>
            
            </div>
          )}

          {subject === "CHEMISTRY" && difficulty === "G11" && (
            <div className='container4'>
              <button
              onClick = {() => {
                setPage("Quiz")

                randomQuiz(mediumchemReactions)
              }}
              >                  
                CHEMICAL REACTIONS                     
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(mediumGasLaws)
              }}
              >                  
                GAS LAWS                   
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(mediumOrganicChem)
              }}
              >                  
                ORGANIC CHEMISTRY                  
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(mediumphysicalpropofmatter)
              }}
              >                  
                PROPERTIES OF MATTER                    
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(mediumSolutions)
              }}
              >                  
                SOLUTIONS          
              </button>
            </div>

          )}
          {subject === "CHEMISTRY" && difficulty === "G12" && (
            <div className='container5'>
              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(hardacids_and_bases)
              }}
              >                  
                ACIDS AND BASES                     
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(hardaqueousReactions)
              }}
              >                  
                AQUEOUS REACTIONS                    
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(hardatomicStructure)
              }}
              >                  
                ATOMIC STRUCTURE                    
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(electrochemistry)
              }}
              >                  
                ELECTROCHEMISTRY               
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(equilibrium)
              }}
              >                  
                EQUILIBRIUM                     
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(kinetics)
              }}
              >                  
                KINETICS                   
              </button>
            </div>
          )}

          {subject === "PHYSICS" && difficulty === "G10" && (
            <div className='container6'>
              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(easykinematics)
              }}
              >
                KINEMATICS
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(easy_forces_and_energy)
              }}
              >
                FORCES AND ENERGY
              </button>
            </div>
          )}

          {subject === "PHYSICS" && difficulty === "G11" && (
            <div className='container7'>
              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(medium_kinematics)
              }}
              >
                KINEMATICS
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(mediumdynamics)
              }}
              >
                DYNAMICS
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(medium_gravitational_fields)
              }}
              >
                GRAVITATIONAL FIELDS
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(medium_electric_fields)
              }}
              >
                ELECTRIC FIELDS
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(medium_mag_fields)
              }}
              >
                MAGNETIC FIELDS
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(medium_1Dwaves)
              }}
              >
                WAVES 1D
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(medium_2Dwaves)
              }}
              >
                WAVES 2D
              </button>
            </div>
          )}

          {subject === "PHYSICS" && difficulty === "G12" && (
            <div className='container8'>
              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(hard_kinematics)
              }}
              >
                KINEMATICS
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(hard_dynamics)
              }}
              >
                DYNAMICS
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(projectile_motion)
              }}
              >
                PROJECTILE MOTION
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(circular_motion)
              }}
              >
                CIRCULAR MOTION
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(momentum_work_energy)
              }}
              >
                MOMENTUM, WORK,AND ENERGY
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(hard_gravitational_fields)
              }}
              >
                GRAVITATIONAL FIELDS
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(hard_electric_fields)
              }}
              >
                ELECTRIC FIELDS
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(electric_circuits)
              }}
              >
                ELECTRIC CIRCUITS
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(electromagnetic_induction)
              }}
              >
                ELECTROMAGNETIC INDUCTION
              </button>
            </div>
          )}

          {subject === "BIOLOGY" && difficulty === "G10" && (
            <div className='container9'>
              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(ecology)
              }}
              >
                ECOLOGY
              </button>
            </div>
          )}

          {subject === "BIOLOGY" && difficulty === "G11" && (
            <div className='container10'>
              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(digestion_nutrition)
              }}
              >
                DIGESTION AND NUTRITION
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(transportation_respiration)
              }}
              >
                TRANSPORTATION AND RESPIRATION
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(wellness_homeostasis)
              }}
              >
                WELLNESS AND HOMEOSTASIS
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(wellness_homeostaticchanges)
              }}
              >
                WELLNESS AND HOMEOSTATIC CHANGES
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(excretion_wastemanagement)
              }}
              >
                EXCRETION AND WASTE MANAGEMENT
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(protection_control)
              }}
              >
                PROTECTION AND CONTROL
              </button>
            </div>
          )}

          {subject === "BIOLOGY" && difficulty === "G12" && (
            <div className='container11'>
              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(biodiversity_conservation)
              }}
              >
                BIODIVERSITY AND CONSERVATION
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(biodiversity_organization)
              }}
              >
                BIODIVERSITY AND ORGANIZATION
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(biological_inheritance)
              }}
              >
                BIOLOGICAL INHERITANCE
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(evolution_biodiversity)
              }}
              >
                EVOLUTION AND BIODIVERSITY
              </button>

              <button
              onClick = {() => {
                setPage("Quiz")
                randomQuiz(inheritance_mechanisms)
              }}
              >
                INHERITANCE AND MECHANISMS
              </button>
            </div>
          )}
          <button 
          className='back'
          onClick={BackHandle}
          >
          BACK
          </button>

        </div>
        
      )}
      {page === "Quiz" && currentQuestion && (
        <div>
          <div>
              <h1 className='p6'>
                {currentQuestion.question}
              </h1>

              {currentQuestion.choices.map((choice) => (
                <ChoiceButton 
                key = {choice}
                onAnswer={() => checkAnswer(choice)}
                choice = {choice}
                />
              ))}

              <h1>TEST</h1>
              <p>Questions: {questionSet.length}</p>
              <p>Index: {questionIndex}</p>
              <p>{currentQuestion?.question ?? "NO CURRENT QUESTION"}</p>
            
            </div>
          <button 
          className='back'
          onClick={BackHandle}
          >
          BACK
          </button>
        </div>
      )}
      
      {page === "Score" && (
        <div>
          <h1 className='p7'>
            QUIZ COMPLETE
          </h1>

          <h1 className='p8'>
            SCORE: {score}/{questionSet.length}
          </h1>

          <div className='incorrectAnswercontainer'>
            {IncorrectQuestion.map((currentQuestion) => (
              <p 
              key = {currentQuestion.question}
              className='incorrectAnswer'
              >
                Question: {currentQuestion.question}
                <br />
                Correct Answer: {currentQuestion.correct}
              </p>
            ))}
          </div>

        <button
          className='backHome'
          onClick = {() => {
            setScore(0)
            setQuestionIndex(0)
            setDifficulty("")
            setSubject("")
            setPage("home")
            setQuestionSet([])
          }}
        >
          HOME
        </button>
          
        </div>
      )}
    
    <Analytics />
    <SpeedInsights />
    </div>
  )
}

// add motionvational quotes, images, properly website design, randomizing feature.