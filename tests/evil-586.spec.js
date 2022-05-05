
  describe("some-evil-spec=586", () => {
    it("evil-block-586", () => {
      window.evil_586 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  