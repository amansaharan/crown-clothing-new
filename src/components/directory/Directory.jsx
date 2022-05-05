import DirectoryItem from '../directory-item/directory-item.component';
import './Directory.styles.scss';

function Directory({ categories }) {
  return (
    <div className='directory-container'>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}
export default Directory;
