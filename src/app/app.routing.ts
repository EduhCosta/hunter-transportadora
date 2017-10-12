import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

    // Components
import { AppComponent } from "./app.component";
import { MenuComponent } from "./components/menu/menu.component";
import { FacaOrcamentoComponent } from "./components/faca-orcamento/faca-orcamento.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AtravesTempoComponent } from './components/atraves-tempo/atraves-tempo.component';
import { CardComponent } from './components/card/card.component';
import { NossoTrabalhoComponent } from './components/nosso-trabalho/nosso-trabalho.component';
import { FormContatoComponent } from './components/form-contato/form-contato.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { FormOrcamentoComponent } from './components/form-orcamento/form-orcamento.component';

    // Screens
import { HomeScreenComponent } from "./screens/home/home.component";
import { ContatoScreenComponent } from './screens/contato/contato.component';
import { SobreScreenComponent } from './screens/sobre/sobre.component';
import { OrcamentoScreenComponent } from './screens/orcamento/orcamento.component';


const ROUTER:Routes = [
    {path: "", component: HomeScreenComponent},
    {path: "home", component: HomeScreenComponent},
    {path: "contato", component: ContatoScreenComponent},
    {path: "sobre", component: SobreScreenComponent},
    {path: "orcamento", component: OrcamentoScreenComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTER);

export const Components = [
    AppComponent,
    MenuComponent,
    FacaOrcamentoComponent,
    FooterComponent,
    AtravesTempoComponent,
    CardComponent,
    NossoTrabalhoComponent,
    FormContatoComponent,
    HistoriaComponent,
    FormOrcamentoComponent
];

export const Screens = [
    HomeScreenComponent,
    ContatoScreenComponent,
    SobreScreenComponent,
    OrcamentoScreenComponent
];