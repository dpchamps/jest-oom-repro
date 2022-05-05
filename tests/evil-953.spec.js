
  describe("some-evil-spec=953", () => {
    it("evil-block-953", () => {
      window.evil_953 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  