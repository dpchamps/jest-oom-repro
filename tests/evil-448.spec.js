
  describe("some-evil-spec=448", () => {
    it("evil-block-448", () => {
      window.evil_448 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  