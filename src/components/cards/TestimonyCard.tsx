import styles from '@/styles/components/cards/testimony_card.module.scss'
import { Testimony } from '@/data/interfaces/TestimonyCardInterface'

interface Props {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setTestimonyVideo: React.Dispatch<React.SetStateAction<string>>
}
  

const TestimonyCard: React.FC<Testimony & Props> = ({video, setShowModal, setTestimonyVideo}) => {

  return (
    <>
        <div 
            className={styles.testimony_card}
            onClick={() => {
                setShowModal(true)
                setTestimonyVideo(video)
            }}
        >
            <video> 
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    </>
  )
}

export default TestimonyCard
