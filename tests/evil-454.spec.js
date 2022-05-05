
  describe("some-evil-spec=454", () => {
    it("evil-block-454", () => {
      window.evil_454 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  