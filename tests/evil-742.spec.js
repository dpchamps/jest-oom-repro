
  describe("some-evil-spec=742", () => {
    it("evil-block-742", () => {
      window.evil_742 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  