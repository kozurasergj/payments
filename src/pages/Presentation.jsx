const Presentation = () => {
  return (
    <section className='flex flex-col items-center md:items-start justify-between md:flex-row w-[80%] mx-auto mt-6'>
      <div className='flex flex-col w-[100%] md:w-[50%] mr-5'>
        <div>
          <h3 className='text-dark font-semibold text-3xl mb-5'>
            Description du projet
          </h3>
          <div>
            <p className='text-dark mb-5'>
              Préparez-vous à être transportés dans un monde où le BMX rencontre
              l'époque sauvage des westerns. La marque Unicorn est fière de
              présenter son tout dernier projet vidéo qui repousse les limites
              de l'imagination : "BMX: Western Escape".
            </p>
            <p className='text-dark mb-5'>
              L'histoire est aussi simple qu'épique : un bandit de renom,
              chevauchant son BMX, se trouve traqué à travers tout le pays. Il
              fait une halte dans un bar au cœur d'une ville western. Mais la
              tranquillité ne dure pas longtemps. Repéré dès son arrivée, notre
              héros enchaîne des tricks pour échapper à ses poursuivants et
              tenter de s'en sortir indemne.
            </p>
            <p className='text-dark mb-5'>
              Pour ceux qui ont suivi les changement chez Unicorn, ce projet
              ambitieux est bien plus qu'un simple court métrage. Il s'agit
              d'une opportunité unique de financer notre prochaine aventure
              vidéo avant même le début du tournage. En contribuant à notre
              campagne de crowdfunding, vous soutenez l'innovation artistique et
              l'audace de la marque Unicorn, tout en participant à la
              réalisation d'un projet qui repousse les frontières du possible.
            </p>
          </div>
        </div>
        <div>
          <h3 className='text-dark font-semibold text-3xl mb-5'>
            A quoi va servir le financement ?
          </h3>
          <p className='text-dark mb-5'>
            En atteignant notre premier objectif de 7 000 euros pour ce projet,
            nous serons en mesure de concrétiser une expérience
            cinématographique immersive. Voici ce que nous pourrons accomplir
            grâce à votre soutien :
          </p>
          <p className='text-dark mb-5'>
            Location de costumes qui plongeront nos acteurs et figurantsdans
            l'époque des cowboys et des hors-la-loi.
          </p>

          <ul>
            <li className='text-dark mb-5'>
              Location de costumes qui plongeront nos acteurs et figurantsdans
              l'époque des cowboys et des hors-la-loi.
            </li>
            <li className='text-dark  mb-5'>
              Engager des figurants spécialisés dans les cascades et les armes
              de cinéma, pour rendre chaque scène encore plus spectaculaire.
            </li>
            <li className='text-dark mb-5'>
              Couvrir les frais de transport de toute l'équipe, assurant ainsi
              que chacun puisse participer à cette aventure unique.
            </li>
            <li className='text-dark mb-5'>
              Rémunérer les riders talentueux qui participeront au tournage,
              leur donnant l'opportunité de briller et de repousser les limites
              du BMX.
            </li>
            <li className='text-dark mb-5'>
              Location de matériel photo et vidéo de haute qualité, pour
              capturer chaque instant avec une précision exceptionnelle.
            </li>
            <li className='text-dark mb-5'>
              Création de modules en bois sur mesure, permettant aux riders de
              réaliser des trikcs et d'élever le niveau des performances.
            </li>
            <li className='text-dark mb-5'>
              Faire appel à un shaper professionnel pour concevoir des modules
              en terre uniques, ajoutant une touche de créativité à nos décors.
            </li>
          </ul>
          <img src='./paliers.png' alt='paliers' className='w-full mb-5' />
          <p className='text-dark mb-5'>
            Si notre objectif initial de 10 000 euros est dépassé, les fonds
            supplémentaires seront utilisés pour soutenir la production de notre
            boîte de production, Unicorn. Cela nous permettra de développer de
            nouveaux projets vidéo audacieux, repoussant les frontières de
            l'innovation artistique et de l'expression créative. Chaque euro
            compte et contribue à la réalisation de ce projet exceptionnel.
            Rejoignez-nous dans cette aventure et ensemble, créons une
            expérience inoubliable qui marquera les esprits et inspirera les
            passionnés de BMX du monde entier.
          </p>
        </div>
        <div>
          <h3 className='text-dark font-semibold text-3xl mb-5'>
            Les contreparties du projet
          </h3>
          <img src='./tree.png' alt='tree' className='w-full mb-5' />
          <p className='text-gray mb-10'>
            Attention ! Les logos ne seront peut être pas identiques à 100% ! On
            travaille encore dessus !
          </p>
        </div>
      </div>
      <div className='flex flex-col w-[100%] md:w-[30%] ml-7'>
        <div className='rounded-lg mb-7'>
          <h3 className="'text-dark font-semibold text-3xl mb-5">
            Contreparties
          </h3>
          <img
            src='./phone1.png'
            alt='tree'
            className='w-full mb-5 rounded-lg'
          />
          <span>Tee shirt</span>
          <ul className='mt-5 text-gray'>
            <li className='mb-3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </ul>
          <div className='flex justify-between items-center pt-3'>
            <div>
              <p className='text-red-600 text-4xl font-bold'>40€</p>
              <p className='text-gray'>6 contributions</p>
            </div>
            <button className=' bg-red-600 text-white font-semibold py-2 px-7 rounded-lg'>
              Participer
            </button>
          </div>
        </div>
        <div className='rounded-lg mb-7'>
          <h3 className="'text-dark font-semibold text-3xl mb-5">
            Contreparties
          </h3>
          <img
            src='./phone2.png'
            alt='tree'
            className='w-full mb-5 rounded-lg'
          />
          <span>Tee shirt</span>
          <ul className='mt-5 text-gray'>
            <li className='mb-3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </ul>
          <div className='flex justify-between items-center pt-3'>
            <div>
              <p className='text-red-600 text-4xl font-bold'>40€</p>
              <p className='text-gray'>6 contributions</p>
            </div>
            <button className=' bg-red-600 text-white font-semibold py-2 px-7 rounded-lg'>
              Participer
            </button>
          </div>
        </div>
        <div className='rounded-lg mb-7'>
          <h3 className='text-dark font-semibold text-3xl mb-5'>
            Contreparties
          </h3>
          <img
            src='./phone2.png'
            alt='tree'
            className='w-full mb-5 rounded-lg'
          />
          <span>Tee shirt</span>
          <ul className='mt-5 text-gray'>
            <li className='mb-3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </ul>
          <div className='flex justify-between items-center pt-3'>
            <div>
              <p className='text-red-600 text-4xl font-bold'>40€</p>
              <p className='text-gray'>6 contributions</p>
            </div>
            <button className=' bg-red-600 text-white font-semibold py-2 px-7 rounded-lg'>
              Participer
            </button>
          </div>
        </div>
        <div>
          <h3 className='text-dark font-semibold text-xl mb-5 '>
            Donne le montant que tu veux Montant à donner
          </h3>
          <p className='rounded-md p-4 mb-7 bg-bgGray text-gray'>Ex : 30</p>
          <button className=' bg-red-600 text-white font-semibold py-2 px-7 rounded-lg w-full mb-7'>
            Participer
          </button>
        </div>
      </div>
    </section>
  )
}

export default Presentation
