
  describe("some-evil-spec=711", () => {
    it("evil-block-711", () => {
      window.evil_711 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  