
  describe("some-evil-spec=917", () => {
    it("evil-block-917", () => {
      window.evil_917 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  