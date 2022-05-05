
  describe("some-evil-spec=390", () => {
    it("evil-block-390", () => {
      window.evil_390 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  