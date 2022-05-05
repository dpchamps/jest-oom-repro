
  describe("some-evil-spec=819", () => {
    it("evil-block-819", () => {
      window.evil_819 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  