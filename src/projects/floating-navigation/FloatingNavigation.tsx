import './FloatingNavigation.scss';
import {onMount} from "solid-js";

export default function FloatingNavigation() {
    const navs = [
        {
            heading: "Home",
            icon: "home",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at consequatur distinctio dolor doloremque
            eaque earum eos, harum id iste maiores minus, omnis, perspiciatis quaerat quis recusandae rerum sequi sint
            suscipit tenetur. Ab animi aperiam, consectetur consequatur cum cumque cupiditate dicta dolore doloribus
            dolorum eaque earum eligendi fugiat fugit illum ipsa ipsam ipsum iure magnam minus molestias necessitatibus
            nemo nesciunt nihil nisi numquam perspiciatis, praesentium quaerat quidem repellat repellendus rerum
            similique sunt tempore veritatis voluptas voluptatem?

            Accusantium animi, excepturi explicabo maxime obcaecati ratione tenetur vel! Aliquam ea expedita id ipsum 
            laboriosam maiores natus nobis nostrum, numquam obcaecati odio porro quasi
            repellendus soluta sunt ut voluptatibus voluptatum? Autem, blanditiis delectus ea inventore nam nobis
            perferendis placeat provident quidem tempore. A ad amet assumenda atque consectetur, corporis error et ex
            impedit laudantium nesciunt omnis quas quo quod rem repellendus rerum similique, sit. Adipisci assumenda
            atque deserunt eos iusto laboriosam odit officiis possimus quia, voluptas.`
        }, {
            heading: "Profile",
            icon: "person",
            content: `At blanditiis, cum deserunt dicta
            ea et, fugit laboriosam maiores nam necessitatibus nesciunt nobis quo, quod quos soluta? Adipisci alias
            architecto at, consequatur distinctio dolore ducimus earum enim et hic illum in ipsa libero magnam maxime
            mollitia nesciunt, officia optio quae qui quisquam quo repudiandae rerum saepe sit tenetur vitae
            voluptatibus. Aperiam beatae culpa delectus doloremque, dolores eos iure nemo non, officiis optio quas quasi
            quibusdam reprehenderit similique veritatis!

            Assumenda ex molestiae nihil pariatur voluptatibus. Aliquid
            amet assumenda delectus dolore dolorum ducimus eligendi et eveniet illo, molestiae molestias nam nisi
            obcaecati odio possimus qui quis ratione suscipit ullam, velit. Ad, aperiam autem dolorem maiores mollitia
            officia veritatis vero! Amet asperiores blanditiis consequuntur deleniti eius exercitationem libero neque,
            numquam quas, rerum sequi sit voluptas. Animi consectetur dignissimos dolore eum fugiat ipsa magnam
            necessitatibus non quam quod.`
        }, {
            heading: "Message",
            icon: "email",
            content: `Amet aperiam beatae corporis, dolores ea eum explicabo illum magnam nemo quis
            quisquam reprehenderit, sint veniam. Adipisci, aliquam asperiores atque dolor dolores error, fugit incidunt
            inventore ipsam laborum mollitia nemo non quidem quod sit temporibus unde. Adipisci cumque distinctio
            mollitia nesciunt sapiente unde voluptas. Dicta dolore est explicabo fuga nesciunt odio quaerat sit ullam
            velit.

            A asperiores assumenda at dicta dolorem dolorum eius enim
            ex excepturi fugit id in ipsum mollitia nam quas, sit voluptate. Eaque eos ex explicabo fugiat fugit
            inventore nulla porro provident, quisquam reprehenderit. Culpa dolor ducimus exercitationem expedita illo
            illum, iure iusto magnam minus nesciunt numquam obcaecati possimus praesentium ratione, repudiandae, soluta
            veniam? Asperiores at consectetur dolorem, doloremque facilis harum modi optio saepe! Ab alias doloribus
            dolorum ea harum ipsum perferendis porro praesentium veritatis voluptatum. Aperiam doloribus fugiat in
            incidunt inventore laudantium non officiis quam ratione sequi!
`
        }, {
            heading: "Settings",
            icon: "settings",
            content: `Adipisci animi assumenda commodi consequuntur
            corporis cupiditate deserunt dolore eligendi, eveniet explicabo id impedit iure labore, laboriosam laborum
            odio perferendis perspiciatis possimus quasi ratione repellat sunt suscipit voluptatem! Cumque dolores
            doloribus enim error impedit odio quam, reprehenderit rerum sequi totam. A ab assumenda dicta dignissimos
            distinctio dolor dolorum est eveniet illo, iusto laborum magnam magni provident quibusdam sint velit
            veritatis! Exercitationem explicabo hic sit ullam voluptas. Alias assumenda aut consequuntur cum doloribus
            eveniet fugiat maxime molestias nulla, ratione unde ut.

            Alias aliquam aperiam architecto aut beatae
            blanditiis, consectetur consequuntur cum deleniti dolor doloremque eius excepturi hic illo impedit
            inventore, ipsum itaque iusto laboriosam mollitia nam, nisi nostrum numquam officia pariatur perspiciatis
            porro quidem quis quod repellendus saepe sapiente totam ut veniam vero voluptas voluptatum! At blanditiis,
            commodi, cumque deserunt dicta dignissimos dolor dolore dolorum earum enim et id, itaque modi nobis omnis
            possimus tenetur. Dolore hic nesciunt vitae.`
        }, {
            heading: "Help",
            icon: "help",
            content: `Accusantium culpa deserunt, dolorem labore placeat tenetur.
            Asperiores deleniti excepturi exercitationem omnis pariatur possimus voluptate! Aperiam aspernatur
            blanditiis dolorem, fugit libero nam neque odio omnis placeat porro quod, repellat ullam, voluptatibus! A
            aut fugit illum laudantium molestias neque quod. Adipisci aut nisi veritatis. Ab adipisci animi asperiores
            aspernatur at blanditiis commodi distinctio dolorem doloremque dolores doloribus earum ex facilis harum
            inventore iste iusto laboriosam magni minima nam nostrum officiis omnis pariatur porro possimus quae qui
            quisquam recusandae reiciendis reprehenderit similique sit, suscipit tempore ut vel voluptatem voluptatum?

            Ad alias animi aperiam assumenda consequatur consequuntur culpa explicabo impedit ipsam magnam molestiae
            molestias necessitatibus nisi non numquam odit officia pariatur perferendis placeat possimus quae quaerat
            quam quasi quidem ratione, reiciendis repudiandae sint sit tempora voluptas!`
        }, {
            heading: "Password",
            icon: "lock",
            content: `Asperiores culpa et eveniet fugiat ipsa nihil
            placeat porro possimus sit voluptatum? Delectus dicta dolore ex fugit ipsam laborum molestias quasi
            reprehenderit vel voluptatum! A blanditiis consequuntur corporis culpa delectus dicta eaque eligendi enim
            eum ex explicabo hic, impedit incidunt inventore iure laborum nam officia omnis possimus quaerat quidem quo
            recusandae, repellat sapiente sequi velit voluptate voluptatibus? Atque commodi cum debitis ducimus eligendi
            ex exercitationem fuga fugit nesciunt nihil odio perspiciatis provident quasi quia, sequi sint sit tempore
            totam voluptates voluptatum.

            Aperiam at beatae blanditiis debitis dolores
            ducimus ea id impedit in ipsum iusto laboriosam maiores maxime molestias, necessitatibus nemo nihil optio
            placeat quasi quibusdam quod tempore voluptates. A, ab, architecto consequuntur cupiditate dicta eius facere
            laboriosam maxime nesciunt non quaerat quisquam, saepe! Asperiores debitis doloremque magni nemo, quidem quo
            sed? Corporis distinctio fugit numquam obcaecati officiis omnis quaerat quam, quasi quos sapiente sint
            suscipit veniam voluptatem?`
        }, {
            heading: "Logout",
            icon: "logout",
            content: `Ab architecto blanditiis dolorem explicabo impedit libero minima molestias
            nihil numquam, odio repellat tempora tenetur veniam! At commodi consequuntur corporis dicta dignissimos
            dolor dolores eaque ex fuga id illo ipsum iste iusto laboriosam libero magni minima nemo, nisi odio odit
            officia omnis quia rem repellat repudiandae similique sit soluta temporibus totam ullam veniam voluptas
            voluptate voluptatibus. Alias, voluptas voluptate. Ab accusamus animi commodi debitis deserunt, dolor,
            doloremque harum laudantium perferendis porro repudiandae tempore unde voluptatibus.

            A dicta dolorum ea eos impedit iure, laudantium magnam modi placeat, provident, ullam voluptas voluptatem voluptatibus. Accusamus
            aspernatur at aut consequuntur dolor, doloremque eaque earum eveniet ex exercitationem fugiat in ipsa ipsum iste iusto laboriosam, laudantium minima molestiae molestias neque quis quisquam tempora totam ut voluptatibus. Ab at dicta distinctio ea eligendi est fugiat hic magnam nobis nostrum odio perferendis,quo tempora tenetur veritatis voluptatem!`
        }
    ]

    let index = 0;
    let previousTop = `3rem`;
    let icon;
    let heading;
    let content;
    let navIcons;

    onMount(() => {
        icon = document.querySelector("#icon");
        heading = document.querySelector("#heading");
        content = document.querySelector("#content");
        navIcons = document.querySelectorAll(".nav-icon");

        for (let i = 0; i < navIcons.length; ++i) {
            const navIcon = navIcons[i];
            navIcon.onclick = changeSelection(i);
        }

        setContent();
    });

    function changeSelection(i) {
        return () => {
            index = i;
            setContent();
            const newTop = `${3 + (i * 4)}rem`;
            const element = document.querySelector(".selector");

            const keyframe = new KeyframeEffect(
                element,
                [
                    {
                        top: previousTop,
                    },
                    {
                        top: newTop,
                    }
                ],
                {
                    duration: 500,
                    fill: "forwards",
                    easing: "ease-in-out",
                }
            );

            const animation = new Animation(keyframe, document.timeline);
            animation.play();
            animation.onfinish = () => {
                previousTop = newTop;
            };
        };
    }

    function setContent() {
        const nav = navs[index];
        icon.textContent = nav.icon;
        heading.textContent = nav.heading;
        content.textContent = nav.content;
    }

    return (
        <div id="FloatingNavigation">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Raleway&family=Roboto&display=swap"
                  rel="stylesheet"/>
            <div class="container">
                <nav>
                    <span class="material-icons nav-icon">home</span>
                    <span class="material-icons nav-icon">person</span>
                    <span class="material-icons nav-icon">email</span>
                    <span class="material-icons nav-icon">settings</span>
                    <span class="material-icons nav-icon">help</span>
                    <span class="material-icons nav-icon">lock</span>
                    <span class="material-icons nav-icon">logout</span>
                </nav>
                <section>
                    <article id="content"></article>
                </section>
            </div>
            <div class="selector">
                <div class="corners">
                    <div class="space-1"></div>
                    <div class="corner">
                        <div class="edge corner-1"></div>
                        <div class="edge corner-2"></div>
                    </div>
                    <div class="space-2"></div>
                    <div class="corner">
                        <div class="edge corner-3"></div>
                        <div class="edge corner-4"></div>
                    </div>
                </div>
                <div class="selector-container">
                    <span class="material-icons" id="icon"></span><span id="heading"></span>
                </div>
                <div class="corners">
                    <div class="space-1"></div>
                    <div class="corner">
                        <div class="edge corner-5"></div>
                        <div class="edge corner-6"></div>
                    </div>
                    <div class="space-2"></div>
                    <div class="corner">
                        <div class="edge corner-7"></div>
                        <div class="edge corner-8"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}