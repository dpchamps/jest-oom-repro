
  describe("some-evil-spec=873", () => {
    it("evil-block-873", () => {
      window.evil_873 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  