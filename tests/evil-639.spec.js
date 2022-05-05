
  describe("some-evil-spec=639", () => {
    it("evil-block-639", () => {
      window.evil_639 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  