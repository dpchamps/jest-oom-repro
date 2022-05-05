
  describe("some-evil-spec=103", () => {
    it("evil-block-103", () => {
      window.evil_103 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  