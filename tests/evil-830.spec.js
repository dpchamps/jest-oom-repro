
  describe("some-evil-spec=830", () => {
    it("evil-block-830", () => {
      window.evil_830 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  