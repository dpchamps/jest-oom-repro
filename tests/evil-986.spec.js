
  describe("some-evil-spec=986", () => {
    it("evil-block-986", () => {
      window.evil_986 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  