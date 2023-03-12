import { Request_CharacterInfo } from 'src/constans/Characters'

export async function getStaticPaths() {
  return {
    paths: Request_CharacterInfo.map(({ id }) => ({
      params: { id: id.toString() },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const character = Request_CharacterInfo.find(({ id }) => id === +params.id)

  return {
    props: {
      character,
    },
  }
}

export default function ChracterDetailPage({ character }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>{character.name}</h1>
      <p>{character.realName}</p>
      <p>{character.age}</p>
    </div>
  )
}
