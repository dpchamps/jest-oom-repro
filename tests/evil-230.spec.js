
  describe("some-evil-spec=230", () => {
    it("evil-block-230", () => {
      window.evil_230 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  