import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  conteudoTextos = {
    conteudoTexto1: `
    <p>
    Este é o Canal de Denúncias da empresa xxx, disponibilizado para que você comunique, de modo seguro e confidencial, situações consideradas inadequadas ou que violem o nosso Código de
    Conduta, outras normas da Instituição ou legislações vigentes.
  </p>

  <p>Está disponível para os públicos externo e interno da empresa xxx como mais uma ferramenta de comunicação, alinhado ao nosso comprometimento com a transparência e a ética.</p>

  <p>As informações aqui registradas são recebidas e avaliadas por meio de um processo seguro e estruturado, assegurando o sigilo absoluto e o tratamento adequado a cada situação.</p>
    `,
    conteudoTexto2: ` <p>Este Canal foi criado para apurar toda e qualquer denúncia de violação do Código de Ética da Empresa XXXX e, para que isso possa ocorrer, precisamos que o use com responsabilidade.</p>

    <p>Descreva sua manifestação com a maior quantidade de informações e detalhes possíveis, para facilitar a verificação dos fatos.</p>

    <p>As informações aqui registradas são recebidas e avaliadas por meio de um processo seguro e estruturado, assegurando o sigilo absoluto e o tratamento adequado a cada situação.</p>

    <p>A veracidade das informações é de responsabilidade do manifestante e será verificada durante o processo de apuração.</p>

    <p>
      A fim de darmos integral cumprimento ao Código de Ética referido, além de agir com segurança e eficiência, solicitamos que você nos forneça algumas informações pessoais, cujo tratamento
      seguirá as diretrizes da nossa Política de Privacidade, disponível no endereço eletrônico XXX. Seus dados serão tratados pelo prazo permitido pela legislação brasileira e poderão ser
      utilizados para a apuração da ocorrência relatada nesta denúncia e para eventuais desdobramentos que possam se seguir a ela. Ao concordar com esse termo, você estará dando seu
      consentimento para utilização dos dados referidos para:
    </p>
    <ul>
      <li>a) Apuração da ocorrência relatada nesta denúncia e para eventuais desdobramentos que possam se seguir a ela;</li>
      <li>b) Entrar em contato com você quando necessário, até arquivamento da denúncia referida e/ou da finalização de eventuais desdobramentos dela.</li>
      <li>c) Desenvolvimento de novas Políticas de Ética e Conduta, bem como para a Promoção de ações de engajamento à Política referida;</li>
      <li>d) Promover ações de engajamento e disponibilização de programas de monitoramento, dicas e orientações sobre Ética e Conduta;</li>
      <li>e) Utilização como meio de defesa em Processos Judiciais e/ou Extrajudiciais que tenham, de alguma forma, correlação com a presente denúncia;</li>
      <li>f) Demais finalidades presentes em nossa Política de Privacidade.</li>
    </ul>

    <p>
      Informamos também que seus dados poderão ser armazenados e utilizados para o atendimento de obrigação legal ou regulatório que a Empresa XXX tenha que, cumprir, bem como para o exercício
      regular de direitos, conforme expresso na Lei Geral de Proteção de Dados (lei n° 13.709/2018).
    </p>

    <p>Saiba que você é o titular dos seus dados pessoais e está livre para, a qualquer momento, solicitar o acesso, a retificação, a exclusão, a portabilidade, entre outros direitos.</p>

    <p>Ainda, caso você tenha alguma dúvida de como seus dados estão sendo tratados, entre em contato conosco através do endereço eletrônico XXX.</p>`,
    conteudoTexto3: `<p>Você pode registrar uma manifestação identificada ou anônima.</p>

    <p>
      Ao escolher a opção identificada, o manifestante se disponibiliza a ser contatado para esclarecimento de possíveis dúvidas sobre a manifestação registrada, o que é muito importante para
      que as informações sejam analisadas de maneira rápida e objetiva.
    </p>

    <p>
      A empresa XXX tomará todas as medidas necessárias para proteger, contra qualquer retaliação, os manifestantes que comunicarem desvios de conduta que envolvam pessoas relacionadas à
      Instituição.
    </p>`,
    conteudoTexto4: ` <p>Por favor, descreva a situação que o motiva a procurar este canal. É importante que o seu relato seja o mais completo e detalhado possível. Como por exemplo:</p>

    <ul>
      <li>● O que (descrição da situação)</li>
      <li>● Quem (nome das pessoas envolvidas, inclusive testemunhas se houver)</li>
      <li>● Quando (data em que aconteceu, acontece ou acontecerá a situação)</li>
      <li>● Onde (Local do fato, setor, parceiro onde ocorreu a situação)</li>
      <li>● Por que (a causa ou motivo)</li>
      <li>● Quanto (se for possível medir)</li>
      <li>● Provas (se elas existem e onde podem ser encontradas)</li>
    </ul>

    <p>Para acompanhar o andamento da sua manifestação, você receberá um número de protocolo. Agradecemos sua iniciativa e confiança.</p>`,
  };
  formValues: FormGroup;
  formPaginaAtual: number = 3;
  desejoMeIdentificar: boolean = true;

  constructor(private fb: FormBuilder) {
    this.formValues = this.fb.group({
      email: ["", Validators.required],
      telefone: ["", Validators.required],
      whatsapp: ["", Validators.required],
      anonimo: [true],
      relacionamento: [""],
      tipoDeManifestacao: [""],
      unidade: [""],
      setor: [""],
      dataOcorrencia: [""],
      envolvidos: [""],
      descricaoFinal: [""],
      anexos: [""],
    });
  }

  ngOnInit(): void {
    this.desejoMeIdentificar = true;
  }

  proximaEtapa(etapaNumero: number) {
    if (this.formValues.valid) {
      console.log(etapaNumero);
      console.log(this.formValues.value);
      this.formPaginaAtual = etapaNumero;
      // your logic here...
    } else {
      console.log("Form is not valid");
    }
  }
}
