import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pagas/home/Home';
import Product from './pagas/product/Product';
import Contact from './pagas/Contact';
import Loginpage from './pagas/login/Loginpage';
import { Layout, theme } from 'antd';
import Footerpage from './components/Footer/Footerpage'
import Appheader from './components/headerpage/Appheader';
const { Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>     
           <BrowserRouter>      
            <Appheader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/loginpage" element={<Loginpage />} />
          </Routes>
        </BrowserRouter>  
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni inventore harum saepe, impedit repudiandae minima corrupti ipsam expedita! Sunt facilis error, nesciunt accusamus totam porro enim iure laborum est doloremque vero sequi labore quam explicabo numquam maiores consectetur recusandae voluptates. Temporibus facilis natus, quod rem deleniti impedit aspernatur nostrum aliquam assumenda tempore vitae tenetur aperiam eaque quisquam reiciendis sunt eos libero consequuntur asperiores. Provident ipsum voluptatum ullam. At tempora illum quod molestiae non facere vero iure aliquam? Pariatur vel placeat omnis, provident rem harum optio commodi, consequuntur, officiis delectus iure deserunt accusamus repellat dolorum dolorem sunt vero. Adipisci pariatur ab ex quod est magni beatae doloribus perferendis sed! Distinctio quia provident nostrum esse pariatur consequatur adipisci! Perferendis laborum dolor minima, obcaecati aspernatur iusto enim, facere doloremque iure id animi. Dolor vel suscipit quia error voluptas voluptatem nisi obcaecati eaque iusto officiis eum minus aliquam, inventore recusandae incidunt quaerat, unde at, assumenda pariatur! Quisquam cumque facere similique. Nobis expedita eos cupiditate ut excepturi ipsum veritatis sunt! Similique magni blanditiis fugiat nulla sunt soluta veniam, minima expedita pariatur modi in at itaque possimus nisi maxime voluptatibus? Ipsum amet excepturi beatae, vitae eius eos fugit distinctio! Nihil velit quidem optio sit error, laudantium aspernatur cum expedita officia sed pariatur quaerat earum accusantium nobis distinctio doloribus, in quibusdam. Exercitationem, veritatis. Perspiciatis modi nobis expedita nisi deleniti aliquid aut hic exercitationem delectus quos. Ad dicta libero nisi debitis explicabo ducimus enim numquam obcaecati architecto eos, accusantium consequuntur reiciendis sequi iure quam sed dolorem accusamus aspernatur voluptate nulla quasi dolores ut neque consequatur. Perspiciatis animi voluptas repudiandae neque, obcaecati alias ullam minus, facere doloremque praesentium laborum autem nobis! Voluptate repellendus consequatur magni aperiam quidem qui accusamus asperiores sapiente nulla totam accusantium praesentium, a eius iure aliquam deserunt quibusdam! Est neque ratione a perferendis, officiis minima aspernatur dignissimos perspiciatis. Minus reiciendis impedit cum consectetur obcaecati, porro necessitatibus ipsa. Laborum enim voluptate vel assumenda dolor, inventore saepe voluptas perferendis modi maxime odio error? Asperiores, expedita! Accusamus rerum, quod commodi deleniti beatae earum, eius error nisi dolorem ipsam possimus perspiciatis sunt? Perspiciatis expedita ducimus cum officia est necessitatibus, unde provident, magnam voluptates ipsa culpa? Deleniti vero atque nobis veritatis adipisci provident praesentium sint quidem nihil harum numquam laudantium delectus iste ullam placeat quae assumenda aperiam distinctio dolores accusamus minus, suscipit facere. Fuga omnis reprehenderit soluta nemo magni, sed consectetur at dolor quis inventore sequi, a blanditiis incidunt. Excepturi provident numquam earum sunt hic quidem aspernatur modi, similique officia corporis error dicta ipsam sint inventore ipsum ab pariatur eveniet et aliquid, architecto a! Incidunt ea voluptatem non eum nam eveniet. Odio delectus similique corporis tenetur aliquam iure! Aliquam, tempore, autem beatae perspiciatis, nobis velit eos quibusdam facilis ullam animi sit minus officiis qui amet voluptatibus alias optio cupiditate exercitationem veritatis iste recusandae error aperiam? Temporibus nobis minima vero excepturi? Corporis beatae ex odio asperiores architecto, vitae quos eligendi excepturi quas maiores officiis, cumque iste, nostrum repellendus! Deserunt dolorum ad reprehenderit a animi, aspernatur cupiditate fugit. Perferendis quia reiciendis et error veritatis sunt, qui dolores accusantium ipsum rerum nihil, molestias laudantium rem earum cupiditate veniam illo necessitatibus incidunt amet officia eos iusto, alias quos! Voluptates iste quos, accusamus impedit officiis minus doloribus eum, laudantium necessitatibus reiciendis ab! Numquam vitae cupiditate incidunt et, molestias sit provident aliquid illo commodi pariatur aperiam, quis, ad praesentium sapiente ipsam eveniet soluta laudantium. Doloribus odit necessitatibus repellat! Commodi voluptas delectus tempora laborum mollitia quia quidem dolorum, sapiente nisi debitis, temporibus ducimus pariatur dolor, earum vero. Blanditiis quam modi sed. Voluptatum asperiores fugiat, sequi nesciunt ipsam ratione at? Accusantium architecto hic laboriosam doloribus facere fugiat maiores nisi inventore ipsam labore maxime, expedita, quo nesciunt dolor necessitatibus quibusdam voluptas repudiandae. Minus eius consectetur laudantium maiores quibusdam voluptatum rem eum dolorem, dolorum minima delectus nisi incidunt deleniti, qui quidem at dolore facere repudiandae nostrum doloremque modi? Ab amet consequatur impedit unde iste illo nam inventore architecto aut molestias tenetur similique quasi eligendi at vitae est dicta consequuntur dolor rem, necessitatibus voluptates blanditiis? Rerum perspiciatis corrupti hic obcaecati iure blanditiis cum velit, sunt debitis eos ratione molestias perferendis quis! Velit in, veniam porro eius voluptas nobis quam doloribus maxime dolorem soluta! Quibusdam maiores, magnam fugit necessitatibus reiciendis voluptatum aliquid non minima laudantium natus molestiae nam esse, optio laboriosam dolorem veritatis libero debitis architecto ut voluptatem tempora sunt laborum. Inventore possimus molestiae repudiandae obcaecati illo necessitatibus aliquam dolores modi accusantium nemo, id sequi ut amet quia incidunt quo unde dicta porro numquam ullam fugiat nihil ipsam dolorum. Ad nobis quidem tempore laborum esse nam porro quaerat! Ea inventore nam architecto optio, tenetur officia, blanditiis, dolore magni eius amet omnis? Neque, fugiat placeat nostrum voluptate saepe rerum error aut consequatur dolore quod perferendis, obcaecati reprehenderit vel deserunt quia magnam recusandae eius, vero porro suscipit ex voluptatum vitae. Expedita eaque atque numquam veritatis iusto porro enim deleniti, consequatur, tempore saepe unde minus maiores molestias impedit optio laboriosam est quasi possimus! Qui dolores quasi sequi voluptatem veritatis aperiam asperiores placeat blanditiis? Repudiandae esse eius nostrum! Recusandae fugit labore doloremque magnam fuga ipsa architecto quibusdam non eaque deserunt voluptates, officia soluta illo quam velit. Nemo, tempore! Totam vel, quaerat deleniti porro laudantium aliquid inventore eaque nemo libero, ratione corporis sunt nobis natus laborum quod necessitatibus ipsam blanditiis tempore delectus, nostrum molestias! Doloremque dolorum ut sit vitae facere obcaecati saepe tempore magnam veritatis reiciendis cumque pariatur aliquam esse quas illo, neque modi reprehenderit. Ut assumenda doloribus eius mollitia voluptas provident sit obcaecati alias vero sequi debitis quia expedita eveniet, nobis natus, quos rem perspiciatis sunt reprehenderit totam iure cum! Aperiam veniam neque exercitationem, dolores quaerat voluptas, assumenda ad iusto rerum, totam fuga! Animi quis provident cum exercitationem consectetur tenetur quod quae libero sapiente culpa minus, corrupti eum earum vero dolorum adipisci sequi commodi aperiam officia obcaecati qui ducimus, saepe optio tempore! Quam dicta libero possimus laborum incidunt, repudiandae necessitatibus fuga sapiente similique magni atque placeat, esse illo accusantium nam, cumque nihil. Praesentium quidem ipsa porro veniam qui. Quibusdam expedita laboriosam nihil, veniam incidunt dolorem aut fugit!        </div>
      <Footer
        style={{
          textAlign: 'center',padding:'0',
        }}
      >
        <Footerpage />
      </Footer>
    </Layout>
  );
};
export default App;