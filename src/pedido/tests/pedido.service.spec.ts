import { ConflictException,  NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { PedidoRepository } from "../../database/repositories/pedido.respositories";
import { PedidoService } from "../pedido.service";
import { mockPedido } from "../../pedido/tests/mocks/pedido.mock";

describe('PedidoService', () => {
    let service: PedidoService;
    let pedidoRepository: PedidoRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PedidoService,
                {
                    provide: PedidoRepository,
                    useValue: {
                        findAll: jest.fn().mockResolvedValue(mockPedido),
                        update: jest.fn().mockReturnValueOnce(mockPedido),
                        delete: jest.fn().mockResolvedValue(mockPedido),
                        findFirst: jest.fn().mockResolvedValue(mockPedido),
                    },
                },
            ],
        }).compile();

        service = module.get<PedidoService>(PedidoService)
        pedidoRepository = module.get<PedidoRepository>(PedidoRepository);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(pedidoRepository).toBeDefined();
    })

    it('should return pedido in findAll', async() => {
        const pedido = await service.findAll();
        expect(pedido).toEqual(mockPedido);
    })

    it('should throw ConflictException in create', async () => {
        jest.spyOn(service, 'create')
        .mockRejectedValue(
            new ConflictException('Essa sala já está reservada para essa data.')
        )

        await expect(
            service.create(mockPedido),
        ).rejects.toThrow(ConflictException);
    })

    it('should throw NotFoundException in update', async() => {
        jest
            .spyOn(pedidoRepository, 'update')
            .mockRejectedValue(new NotFoundException('Pedido de cirurgia não encontrado.'))

        await expect(
            service.update(
                99999,
                mockPedido
            ),
        ).rejects.toThrow(NotFoundException)
    })

    it('should throw NotFoundException in delete', async() => {
        jest    
            .spyOn(pedidoRepository, 'delete')
            .mockRejectedValue(new  NotFoundException('Pedido de cirurgia não encontrado.'))

            await expect(
                service.remove(99999),
            ).rejects.toThrow(NotFoundException)
    })
})