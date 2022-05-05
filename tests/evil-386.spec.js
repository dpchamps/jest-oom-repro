
  describe("some-evil-spec=386", () => {
    it("evil-block-386", () => {
      window.evil_386 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  