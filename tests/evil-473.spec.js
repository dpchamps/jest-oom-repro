
  describe("some-evil-spec=473", () => {
    it("evil-block-473", () => {
      window.evil_473 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  