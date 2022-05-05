
  describe("some-evil-spec=119", () => {
    it("evil-block-119", () => {
      window.evil_119 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  