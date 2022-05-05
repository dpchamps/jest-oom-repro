
  describe("some-evil-spec=143", () => {
    it("evil-block-143", () => {
      window.evil_143 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  