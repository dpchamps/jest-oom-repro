
  describe("some-evil-spec=440", () => {
    it("evil-block-440", () => {
      window.evil_440 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  